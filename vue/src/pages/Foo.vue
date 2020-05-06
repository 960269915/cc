<template>
  <div>
    我是foo组件
    <div @click="test">count</div>
    <p>{{this.$store.state.a.count}}</p>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState} from "vuex";
export default {
  data() {
    return {
      num: 10,
    };
  },
  created() {
    console.info(this.$store.state.a.count)
  },
  methods: {
    test() {
      this.$store.dispatch('a/increment_action')
      // this.num += 1;
      // this.add(1);
      // this.$store.commit({
      //   type:'changeobj',
      //   name:'zz',
      //   age:18
      // })
    },
  },
  computed: {
    ...mapState(["name"]),
    numcmp: function() {
      return this.num * 10;
    },
  },
};
</script>
