package main

func main() {
	//===============================字符串
	//var name string = "xx,x"                          //字符串
	//print(name[0:3])                                  //字符串截取
	//print(len(name))                                  //长度
	//fmt.Print(strings.Split(name, ","))               //分割
	//print(strings.Contains(name, ","))                //包含
	//print(strings.LastIndex(name, ","))               //字符串出现的位置
	//print(strings.Join([]string{"a", "b", "c"}, ",")) //join操作

	//var age = 10            //数字类型，自动推断
	//const sex = "男"         //常量
	//var tf bool = false     //布尔 不能用0和非0表示true和false
	//var fl float32 = 3.1    //浮点
	//return name, age // 函数返回值

	//=================================数组
	//var arr1 = [3]int{1, 2, 3} //数组类型
	//var arr3 = [...]int{1,2,3} //数组不指定长度
	//var arr2 = []int{1, 2}         //切片数组
	//var s1 = arr2[0:2]             //截取切片数组，包含前面，不包含后面
	//s1 = append(s1, 3)             //添加
	//s1 = append(s1[:1], s1[2:]...) //删除，先截取前面的，再截取后面的，重新组成个数组（删除那个，从0取到删除Index,再截取index+1到最后）
	//var s2 = make([]int, 2)
	//copy(s2, s1) //复制
	//fmt.Print(s2)

	//===============================创建map对象
	//var obj = make(map[string]string) //map[key的类型]值的类型
	var obj = map[string]string{
		"name": "cc",
	}
	var value, ok = obj["name"] //判断某个Key是否存在
	print(value, ok)

	//================================循环
	//for i := 0; i < 11; i++ {
	//	if i == 9 {
	//		break
	//	}
	//	if i == 10 {
	//		continue
	//	}
	//}
	//循环数组和对象
	//var arr = []int{1, 2, 3}
	//for i, index := range arr {
	//	print("\n", i, index)
	//}
	//
	//for key, val := range obj {
	//	print("\n", key, "---", val)
	//}
}
