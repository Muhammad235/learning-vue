<template>
  <div class="showColor" :style="{background: color}">

  </div>

  <input type="text" v-model="color">
  
</template>

<script>
export default {
    name: 'test',
    props:{
        color: String
    },
    data(){
        return{
            color: ''
        }
    }
}
</script>

<style>
    .showColor{
        border: 1px solid  red;
        height: 200px;
    }
</style>