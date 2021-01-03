<template>
  <div>
    <button @click="modeltf = true">弹出</button>
    <!-- to="body" 追加到body元素里面 -->
    <teleport to="body">
      <div v-if="modeltf" class="modelbox">
        <div>
          <p>弹出内容</p>
          <button @click="modeltf = false">关闭</button>
          <button @click="fn(11)">关闭</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import { ref,reactive } from "vue";
export default {
  setup() {
    const data = reactive({
      name: "cc",
      arr: [],
      obj: {
        name: "ccc",
        say() {
          console.log(this);
        },
      },
    });
    let modeltf = ref(false);
    function fn(params) {
      data.obj.say()
    }
    return {
      modeltf,
      fn,
      data
    };
  },
};
</script>

<style scoped>
.modelbox {
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 1000;
}
</style>