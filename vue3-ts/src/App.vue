<template>
  <div>
    <!-- <p v-for="(item, index) in name" :key="index" @click="namefn(item)">
      {{ item }}
    </p>
    <p @click="choose(selectName)">{{ selectName }}</p>
    <p>{{ chooseVal }}</p> -->
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, toRefs } from "vue";
export default defineComponent({
  // setup 函数的用法，可以代替 Vue2 中的 date 和 methods 属性，直接把逻辑写在 setup 里就可以
  setup() {
    // ref函数 要在template中使用的变量，必须用ref包装一下，函数不需要
    const name = ref(["cc", "zz"]);
    let selectName = ref("");
    function namefn(name: string) {
      selectName.value = name;
    }

    const data = reactive({
      girls: ["meinv1", "meinv2"],
      chooseVal: "default",
      choose(name: string) {
        console.log(name);
        data.chooseVal = name;
        console.log(this); //this指向vue
      },
    });

    return {
      name,
      namefn,
      selectName,
      // reactive 变量需要torefs函数包裹,并且解构。否则需要在template模板里面访问变量时加入data（data.chooseVal,data为定义的变量名称)
      ...toRefs(data),
    };
  },
});
</script>

<style lang="scss"></style>
