import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import moduleA from "./store1";
import moduleB from "./store2";
// const store = new Vuex.Store({
//     state: {
//         count: 0,
//         todos: [
//             { id: 1, text: "吃饭", done: true },
//             { id: 2, text: "洗碗", done: false },
//         ],
//         obj: { name: "cc" },
//     },
//     getters: {
//         //vuex计算属性
//         dotodos: (state) => {
//             return state.todos.filter((item) => {
//                 return item.done;
//             });
//         },
//         doneTodosCount: (state, getters) => {
//             //console.info(getters); //gettersw为上级getters
//             return getters.dotodos.length;
//         },
//         getid: (state) => {
//             //让 getter 返回一个函数，来实现给 getter 传参
//             // this.$store.getters.getid(2); 调用
//             // getter 在通过方法访问时，每次都会去进行调用，而不会缓存结果
//             return (id) => {
//                 return state.todos.find((item) => {
//                     return item.id === id;
//                 });
//             };
//         },
//     },
//     mutations: {
//         //Mutation 必须是同步函数
//         add(state, payload) {
//             state.count += payload;
//         },
//         changeobj(state, payload) {
//             //要遵循vue响应规则
//             delete payload.type;
//             state.obj = Object.assign({}, state.obj, payload);
//             // Vue.set(state.obj,'age',payload.age);
//         },
//     },
//     actions: {
//         // Action 提交的是 mutation，而不是直接变更状态.Action 可以包含任意异步操作
//         actions_add({ commit }, payload) { //actions返回的是个promise对象
//             //context等于store实例  {commit} = context.commit
//             commit("add", payload.num); //Action 通过 store.dispatch 方法触发
//         },
//     },
// });

// export default store;

const myPlugin = (store) => {
  store.subscribe((mutation, state) => {
    // 每次 mutation 之后调用（可以做些其他操作）
    // mutation 的格式为 { type, payload }
      console.info(mutation.type)
    // console.info(mutation, state);
   
  });
};
const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB,
  },
  strict: process.env.NODE_ENV !== 'production',//开启严格模式,不是由 mutation 函数引起的，将会抛出错误(不要在生产环境开启)
  plugins: [myPlugin]
});

export default store;
