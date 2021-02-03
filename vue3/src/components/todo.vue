<template>
  <div>
    <input
      type="text"
      placeholder="新增今日待办"
      v-model="newTdo"
      @keyup.enter="add"
    />

    <h3>待办列表</h3>
    <ul>
      <li v-for="item in filterTodos" :key="item.id">
        <div class="view" v-if="item.edit == false">
          <input type="checkbox" v-model="item.completed" />
          <span @click="editfn(item)">{{ item.id }}--{{ item.title }}</span>
          <button @click="del(item)">x</button>
          <span>{{ item.completed ? "已完成" : "未完成" }}</span>
        </div>
        <!-- 编辑 -->
        <div class="edit" v-else>
          <input type="text" v-model="item.title" @blur="editend" />
        </div>
      </li>
    </ul>

    <div>
      <button @click="filterfn('all')">全部</button>
      <button @click="filterfn('todo')">待办</button>
      <button @click="filterfn('completed')">已办</button>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, computed, watchEffect, ref, watch } from "vue";
let myfilter = {
  all(todos) {
    return todos;
  },
  todo(todos) {
    return todos.filter((item) => !item.completed);
  },
  completed(todos) {
    return todos.filter((item) => item.completed);
  },
};
export default {
  setup() {
    const state = reactive({
      newTdo: "",
      todos: [],
      filterType: "all",
      filterTodos: computed(() => {
        return myfilter[state.filterType](state.todos);
      }),
    });

    function add() {
      state.todos.push({
        id: state.todos.length + 1,
        title: state.newTdo,
        completed: false,
        edit: false,
      });
      state.newTdo = "";
    }
    function del(item) {
      state.todos.splice(state.todos.indexOf(item), 1);
    }
    let num;
    function editfn(item) {
      num = state.todos.indexOf(item);
      state.todos[num].edit = true;
    }
    function editend() {
      state.todos[num].edit = false;
    }
    function filterfn(params) {
      state.filterType = params;
    }

    // watchEffect会自动的收集依赖，而watch是明确的指定监听某个变量
    // watch可以获取到新值和旧值，watchEffect则只能取到最新的
    // watchEffect会在初始化的时候执行一次，类似computed
    // computed的值没有被使用，是不会触发回调的 watchEffect是在setup的时候就会初始化
    const stop = watchEffect(() => {
      // console.log(state.todos);
    });
    // 停止监听
    // stop()

    watch(state.todos, () => {
      console.log(11);
    });

    return {
      filterfn,
      editend,
      add,
      del,
      editfn,
      ...toRefs(state),
    };
  },
};
</script>

<style scoped></style>
