import { createApp, h } from "vue";
import App from "./App.vue";
import "./index.css";
import {
  createRouter,
  createWebHashHistory,
  useRoute,
  useRouter,
} from "vue-router";
import { createStore, useStore } from "vuex";

// 创建路由
import home from "./view/home.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [{ path: "/home", name: "home", component: home }],
});

//============================= 路由新特性
// 1、动态路由
router.addRoute({
  path: "/about",
  name: "about",
  component: () => import("./view/about.vue"),
});
// 直接根据父路由名称，添加子路由
router.addRoute("about", {
  path: "/about/info",
  component: {
    render() {
      return h("div", "about子页面");
    },
  },
});
// 2、拿取路由实例
const myrouter = useRouter();

// 3、* 通配符被取消 用以下方式替代
// {
//     path:"/:pathMatch(.*)*",name:"404",component:'404'
// }

// 4、kepp-alive 的变化（必须在router-view内部，动画组件同理）
{
  /* <router-view v-slot="{Component}">
    <keep-alive>
        <component :is="Component"></component>
    </keep-alive>
</router-view> */
}

// 5、mixins中的路由守卫，被忽略

// vuex================================= 新特性
const store = createStore({
  state() {
    return {
      count: 1,
    };
  },
  mutations: {
    add(state, payload) {
      state.count = payload;
    },
  },
});

// 1、页面拿取store
const mystore = useStore();

// createApp(App) 会返回app实例
const vm = createApp(App).use(router).use(store).mount("#app");

// 注册全局的组件（局部组件同vue2）
// const vm = createApp(App).component('组件名称','组件引用')

// 注册全局指令
// const vm = createApp(App).directive('指令名称',{
//     beforeMount(el,binding,vnode){
//         el.style.display = "none"
//     }
// })
