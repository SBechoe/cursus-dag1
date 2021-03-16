<template>
  <div class="row">
    <div class="col">
      <input type="text" v-model="textField" placeholder="Input Text">
      <input type="text" readonly v-model="textField" placeholder="Input Text">
    </div>
  </div>
</template>

<script>
export default {
  name: "ToInput",
  data(){
    return{
      textField: ''
    }
  }
}
</script>

<style lang="css" scoped>
</style>
