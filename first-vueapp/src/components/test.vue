<template>
  <div class="showColor" :style="{background: inputcolor}">
     <div>
     <input type="text" v-model="inputcolor">
    </div>
  </div>


  
</template>

<script>
export default {
    name: 'test',
    props:{
        inputcolor: String
    },
    data(){
        return{
            inputcolor: ''
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