<template>
  <div>
    我是Bar组件
    <router-link to="/foo">Go to Foo</router-link>
  </div>
</template>

<script>
export default {
  created() {
    // console.info(this.$route);
  },
};
</script>
