const moduleA = {
        namespaced: true,//开启命名空间
        state: {
            count: 1, //this.$store.state.a.count 访问
          },
          mutations: {
            increment(state) {
              //如果没有命名空间，increment是全局的
              // 这里的 `state` 对象是模块的局部状态
              //当使用命名空间后 commit('modulea/increment')
              state.count++;
            },
          },
          actions: {
            increment_action({ state, commit, rootState }) {
              //rootState为store根节点
              //当使用命名空间后  dispatch('modulea/increment_action')
            //   console.info(state, rootState);
              commit("increment");
            },
          },
          getters: {
            doubleCount(state, getters, rootState) {
               //当使用命名空间后 getters['modulea/doubleCount']
              return state.count * 2;
            }
          }

};
export default moduleA;
