<template>
  <div class="container-fluid">
    <HeaderComponent/>
    <ValidateComponent msg="Het is goed" msgType="success" hidden/>
    <button type="button" @click="toggleVacayList()" hidden>Toggle</button>
    <VacationPicker v-if="showList"/>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import VacationPicker from './components/VacationPicker.vue'
import ValidateComponent from './components/ValidateComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    VacationPicker,
    ValidateComponent
  },
  data(){
    return{
      showList: true
    }
  },
  methods:{
    toggleVacayList(){
      this.showList = !this.showList;
    }
  }
}
</script>

<style>
</style>
