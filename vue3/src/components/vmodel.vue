<template>
  <div>
    <!-- update 代替 input 事件 -->
    <div @click="$emit('update:num', num + 1)">{{ num }} 传递的value</div>
  </div>
</template>

<script>
export default {
  props: {
    num: {
      type: Number,
      default: 0,
    },
  },
  setup() {
    function updatenum() {
      console.log(this);
    }
    return {
      updatenum,
    };
  },
};
// --------------------------------------------------------------------------------- vue2 v-model

//  <input v-model="message"></input>
//  <input :value="message" @input="message=$event"></input>

//子组件
// <template>
//     <div class="text">
//         <input type="text" :value="value" @input="changeVal">
//     </div>
// </template>

// <script>
// export default {
//     name:'MyInput',
//     props:['value'],
//     methods:{
//         changeVal(e){
//             this.$emit('input',e.target.value)
//         }
//     }
// };
</script>

<style></style>
