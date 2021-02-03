<template>
  <div>{{ p.name }}</div>
  <div>{{ Lists }}</div>
  <div>{{ pp }}</div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs } from "vue";
import { Person, List } from "./model";

export default defineComponent({
  setup() {
    const state = reactive({
      pp: {
        age: 18,
      },
    });
    // 对象声明
    let p = ref<Person>({
      name: "cc",
    });
    // 数组声明
    let Lists = ref<List[]>([
      {
        name: "cc",
        id: 21,
      },
    ]);

    let listObj = ref<List>({
      name: "cc",
      id: 1,
    });

    setTimeout(() => {
      p.value.name = "11";
    }, 1000);
    return {
      p,
      Lists,
      listObj,
      ...toRefs(state),
    };
  },
});
</script>

<style scoped></style>
