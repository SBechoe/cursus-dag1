<template>
<div class="container-fluid">
  <div id="app">
    <HeaderComponent/>
    <VacationPicker/>
  </div>
</div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import VacationPicker from './components/VacationPicker.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    VacationPicker

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
