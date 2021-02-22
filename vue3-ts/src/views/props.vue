<template>
  <div>
    <p v-for="(item, index) in girls" :key="index" @click="seletFn(item)">
      {{ item }}
    </p>
    {{ selectGirl }}
    <p>{{ text }}</p>
    <p>{{ name }}</p>
    <p>{{ obj.selectGirl }}</p>
  </div>
</template>

<script lang="ts">
import { toRefs, reactive, watch, ref } from "vue";
export default {
  setup() {
    // 约束类型
    interface DataProps {
      girls: string[];
      selectGirl: string;
      seletFn: (name: string) => void;
    }
    // 单个类型约束
    const text = ref<string>("单个类型约束");
    const data: DataProps = reactive({
      girls: ["cc", "zz"],
      selectGirl: "default",
      seletFn(name) {
        data.selectGirl = name;
        data2.obj.selectGirl = "sss";
        text.value = "xxx";
      },
    });

    // 对data进行单个约束（！！！！对象貌似能约束到类型，但是不能约束到未定义）
    const data2 = reactive({
      name: <string>"11",
      obj: <DataProps>{
        girls: ["1"],
        selectGirl: "zz",
      },
    });

    // 监听对象属性，监听reactive中的值，需要设置函数()=>
    // watch(
    //   () => data.selectGirl,
    //   function() {
    //     console.log("对象属性被改变");
    //   }
    // );

    // 监听单个值(或者对象,数组)
    // watch(text, () => {
    //   console.log(22);
    // });

    // 监听多个
    watch([text, () => data.selectGirl], (newValue, oldValue) => {
      console.log(`new--->${newValue}`);
      console.log(`old--->${oldValue}`);
    });
    return {
      text,
      ...toRefs(data),
      ...toRefs(data2),
    };
  },
};
</script>

<style lang="scss" scoped></style>
