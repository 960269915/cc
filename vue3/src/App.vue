<template>
  <!-- <compositionapi/>
  <modelButton></modelButton>
  <vmodel v-model:num="num"></vmodel> -->
  <p @click="add">我是Vuex的内容 {{ count }}</p>
  <vuets></vuets>
  <router-view></router-view>
  <todo />
</template>

<script>
import compositionapi from "./components/compositionapi.vue";
import modelButton from "./components/modelButton.vue";
import vmodel from "./components/vmodel.vue";
import todo from "./components/todo.vue";
import vuets from "/@/components/vuets.vue";

import { useStore } from "vuex";
import { ref, onMounted, toRefs } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "App",
  components: {
    compositionapi,
    modelButton,
    vmodel,
    todo,
    vuets,
  },
  setup() {
    // 读取环境变量
    console.log(import.meta.env.VITE_TOKEN);
    let num = ref(1);
    onMounted(() => {
      const myrouter = useRouter();
      console.log(myrouter);
    });
    // 访问vuex的store
    const mystore = useStore();
    return {
      // 扩展开store里面的值
      ...toRefs(mystore.state),
      add() {
        //  触发mutations
        mystore.commit("add", 2);
      },
      num,
    };
  },
};
</script>
