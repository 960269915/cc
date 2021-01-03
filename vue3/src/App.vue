<template>
  <!-- <compositionapi/>
  <modelButton></modelButton>
  <vmodel v-model:num="num"></vmodel> -->
  <todo/>
</template>

<script>
import compositionapi from './components/compositionapi.vue'
import modelButton from './components/modelButton.vue'
import vmodel from './components/vmodel.vue'
import todo from './components/todo.vue'


import {ref} from  'vue'
export default {
  name: 'App',
  components: {
    compositionapi,
    modelButton,
    vmodel,
    todo
  },
  setup(){
    let num = ref(1);
    return{
      num
    }
  }
}
</script>
