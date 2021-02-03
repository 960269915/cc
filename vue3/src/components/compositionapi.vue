<template>
  <div>
    {{ num }} <br />
    {{ cmnum }} <br />
    {{ name }} <br />
    <div ref="divele">2</div>
  </div>
</template>

<script>
import {
  reactive,
  computed,
  onMounted,
  onUnmounted,
  ref,
  toRefs,
  nextTick,
  watch,
} from "vue";
export default {
  name: "HelloWorld",
  setup() {
    // 声明单值 页面访问直接写名称
    let name = ref("name");

    // 拿取页面dom divele需要和页面dom的ref名称一样，并且需要return。divele.value 才是真实dom
    let divele = ref(null);

    // 使用toRefs后，需要把值解构
    let { num, cmnum } = numfn();

    // 监听器
    watch(name, (new_val, old_val) => {
      divele.value.innerText = `${new_val} + ${old_val}`;
    });

    // 监听对象，默认就是深度监听
    // watch(obj,()=>{})

    // 监听对象属性
    // watch(() => state.count, (oldVlaue, newValue) => {
    //   console.log(oldVlaue, newValue, '改变')
    // })

    // 生命周期（写在return之前）
    onMounted(() => {
      setTimeout(() => {
        name.value = "name--cc";
        console.log("我被挂载了");
      }, 1000);
    });

    return {
      num,
      cmnum,
      name,
      divele,
    };
  },
};

// 提取num相关逻辑，方便复用
function numfn() {
  // reactive 把值设置为响应式
  const data = reactive({
    num: 1,
    // 计算属性
    cmnum: computed(() => {
      return data.num + "计算属性";
    }),
  });
  // toRefs 把每个响应式的值，变为ref对象（单值），可以避免页面写data.xxx
  return toRefs(data);
}
</script>
