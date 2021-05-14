const  db = wx.cloud.database();
const apidb = db.collection("apidb"); //获取集合引用  db.doc(id)
const count = apidb.count();
const _ = db.command; //查询指令
Page({
  onLoad(){
  //================== 获取数据的总条数
  //  count.then(res=>{
  //     console.log(res);
  //   })
    this.watchdb();
  },
  //================== 新增
  add(){
    apidb.add({
      data:{
        name:'cc' + Math.random(),
        age:13,
        todo:['node','js'],
        location: new db.Geo.Point(113, 23),
        isfinsh:true,
        attr:{
          height:"180"
        },
        scores:[20,30,40],
        "root": {
          "objects": [
            {
              "numbers": [10, 20, 30]
            },
            {
              "numbers": [50, 60, 70]
            }
          ]
        }
      }
    }).then((res)=>{
      console.log(res);
      console.log('add');
    })
  },
  //=================== 查询
  search(){
    // 根据id查询
    // apidb.doc("b00064a7607ee0510fdc54f0473e21b8").get()
    // .then(res=>{
    //   console.log(res);
    // })

    // where 条件查询 (where 对象接受对象，对象的每个字段和值构成一个查询条件，每个属性之间是且的关系)
    apidb.where({
      isfinsh:true,
      // todo:['node','js']完全匹配数组。 todo:'node' 数组node包含node  'todo.0':'node' 数组下标0为node（更新数组也可以使用下标）
      //使用指令查询数组 todo:_.eq('node')
      todo:['node','js'], 
      'attr.height':'180' //对象查询
    })
    .then(res=>{
      console.log(res);
    })
  },
  //================= 嵌套查询（更新可以同样嵌套）
  deepsearch(){
    apidb.where({
      // 下标不是必须的，如果不指定下标，将匹配数组中的所有
      'root.objects.1.numbers.2': 70 // 满足 root.objects 字段数组的第二项的 numbers 字段的第三项等于 70 的记录
    }).get()
    .then(res=>{
      console.log(res);
    })
  },
  updatearr(){
    apidb.where({
      scores:1200
    })
    .update({
      data:{
        // "scores.$" 匹配到的第一个  $[] 数组中的所有
        "scores.$[]":1200
      }
    })
    .then(res=>{
      console.log(res);
    })
  },
  cmdsearch(){
    // 常用指令
    // eq	等于
    // neq	不等于
    // lt	小于
    // lte	小于或等于
    // gt	大于
    // gte	大于或等于
    // in	字段值在给定数组中
    // nin	字段值不在给定数组中

    // and 逻辑指令（且）
    // or （或）
    apidb.where({
      // age:_.lt(18)//小于18
      // age:_.gte(13).and(_.lte(20)),// 大于等于13且小于等于20
      age:_.eq(13).or(_.eq(20)) //等于13 或者20
    }).get()  
    .then(res=>{
      // console.log(res);
    })
  },

  // =================更新一条数据（更新单个字段）
  update(){
    // 更新指令	说明
    // set	设置字段为指定值
    // remove	删除字段
    // inc	原子自增字段值
    // mul	原子自乘字段值
    // push	如字段值为数组，往数组尾部增加指定值
    // pop	如字段值为数组，从数组尾部删除一个元素
    // shift	如字段值为数组，从数组头部删除一个元素
    // unshift	如字段值为数组，往数组头部增加指定值
    // ------------------多个数据更新，需要在云函数端进行操作
    apidb.doc("b00064a7607ee0510fdc54f0473e21b8").update({
      data:{
        // isfinsh:true //更新单个值
        // todo:_.push('vue')
        // attr:{
        //   height:"190" //只是把attr对象的属性更新了
        // }
        attr:_.set({
          height:"110"  //使用_set才是更新整个对象
        })
      }
    }).then(res=>{
      console.log(res);
    })
  },

  // =======================替换数据
  set(){
    apidb.doc("b00064a7607ee0510fdc54f0473e21b8")
    .set({
      data:{
        name:'我是被set的数据' + Math.random()
      }
    }).then(res=>{
      console.log(res);
    })
  },
  //================= 删除数据(如需删除多条记录，需要云函数)
  remove(){
    apidb.doc("b00064a7607ee0510fdc54f0473e21b8")
    .remove()
    .then(res=>{
      console.log(res);
    })
    .catch(err=>{
      console.log(err);
    })
  },
  addgoods(){
    const db = wx.cloud.database().collection("goods");
    db.add({
      data:{
        name:"哈哈",
        price:3
      }
    })
  },

  //=============================== 监听数据
  watchdb(){
    const db = wx.cloud.database()
    const watch = db.collection("goods")
    .orderBy('price','asc')
    .limit(10)
    .watch({
      // 会在第一次监听初始化及后续数据变更时收到推送事件  
      onChange(snapshot){
        // console.log('docs\'s changed events', snapshot.docChanges) //后续变更的数据
        // console.log('query result snapshot after the event', snapshot.docs) //满足查询条件的数据
        // console.log('is init data', snapshot.type === 'init') //是否是初次查询
      },
      onError(err){
        console.log(err);
      }
    })
    // watch.close()  关闭监听
  },
  //================== 聚合(数据批量处理,能像流水线一样，一直往下处理。
  // 包括分组阶段（group），排序阶段（sort）,投影阶段projet（重新包装数据格式）,不同阶段，使用不同的聚合操作符,（还要其他很多阶段，具体看文档）
  agg(){
    const db = wx.cloud.database();
    const $ = db.command.aggregate;

    // group 操作
    // db.collection("goods").aggregate()
    // .limit(10)
    // .group({
    //   _id:"$price", //按照price字段分组,id值为price的值,$price对应数据中的此字段
    //   tongji:$.sum(1) //让输出的数据，都有一个tongji字段，$.sum为聚合操作符
    // })
    // .end()
    // .then(res=>{
    //   //此处结果为 10条数据中，price字段不同的数据有多少个种类，每个种类的数量是多少
    //   console.log(res);
    // })
    // sort操作
    // .sort({ //对数据进行排序,1为升序，-1为降序
    //   age: -1,
    //   score: -1
    // })
    db.collection("goods").aggregate()
    .limit(10)
    .project({
      // name:1,//1代表需要返回此字段,0代表去除,如果某个字段为0，那么就不能有其他字段操作了
      price:0,
    })
    .project({
      name:1,
      newInfo:$.concat(['我的名字是','$name'])
    })
    .end()
    .then(res=>{
      console.log(res);
    })
  },
  // 联表查询
  lookup(){
    wx.cloud.callFunction({
      name:"lookup"
    }).then(res=>{
      console.log(res);
    })
  }
})