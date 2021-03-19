<template>
  <div class="text-white">
    <!-- <ValidateComponent msg="Het is goed" msgType="success" hidden/>
    <button type="button" @click="toggleVacayList()" hidden>Toggle</button>
    <VacationPicker v-if="showList"/> -->
    <div id="bg">
      <img src="./assets/bg.png" alt="background"/>
    </div>
    <HeaderComponent/>
    <QuoteComponent/>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import QuoteComponent from './components/QuoteComponent.vue'
// import VacationPicker from './components/VacationPicker.vue'
// import ValidateComponent from './components/ValidateComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    QuoteComponent
    // VacationPicker,
    // ValidateComponent
  },
  data(){
    return{
      showList: true
    }
  }//,
  // methods:{
  //   toggleVacayList(){
  //     this.showList = !this.showList;
  //   }
  // }
}
</script>

<style>
  body{
    overflow: hidden;
    background-color: rgb(0, 37, 71);
  }

  #bg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    align-items: center;
    justify-content: center;
  }

  #bg > img{
    object-fit: cover;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.8;
  }
</style>
