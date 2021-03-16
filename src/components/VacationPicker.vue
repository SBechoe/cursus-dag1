<template>
    <div clas="row">
      <div class="col-6">
        <button class="btn btn-primary" @click="toggleInfo()">Toggle Info</button>
        <div class="card bg-secondary">
          <h2>{{ selectedCountry.name}}</h2>
          <h3>
            {{ selectedCountry.capital}}
            <span v-if="isExpensive" class="badge badge-danger">Expensive!</span>
            <span v-if="onSale" class="badge badge-success">Sale!</span>
          </h3>
        </div>
        <button class="btn btn-info" @click="prevCountry()">Previous</button>
        <button class="btn btn-info" @click="nextCountry()">Next</button>
      </div>
      <div class="col-6">
        <h2>Selected Country</h2>
        <ul class="list-group" :hidden="isHidden">
          <li class="list-group-item">{{ selectedCountry.id}}</li>
          <li class="list-group-item">{{ selectedCountry.name}}</li>
          <li class="list-group-item">{{ selectedCountry.capital}}</li>
          <li class="list-group-item">{{ selectedCountry.details}}</li>

          <img :src="getImageUrl(selectedCountry.img)" :alt="selectedCountry.img">

          <li class="list-group-item" v-if="isExpensive">
            <span class="badge badge-danger badge-pill">Expensive!</span>
          </li>
          <li class="list-group-item" v-if="onSale">
            <span class="badge badge-success badge-pill">On Sale!</span>
          </li>
        </ul>
        <h1>Counter for fun</h1>
        <h2>{{counter}}</h2>
        <button class="btn btn-success" @click="increase()">+1</button>
        <button class="btn btn-danger" @click="decrease()">-1</button>
        <button class="btn btn-info" @click="reset()">Reset</button>
      </div>
    </div>
</template>

<script>
  import countryData from '../data/countryData';


  export default {
    name: 'VacationPicker',
    data(){
      return{
        data: countryData,
        isHidden: false,
        counter: 0,
        selectedCountryIndex: 0,

      }
    },
    methods:{
      increase(){
        this.counter++;
      },
      decrease(){
        this.counter--;
      },
      reset(){
        this.counter = 0;
      },
      toggleInfo(){
        this.isHidden = !this.isHidden;
      },
      hideList(){
        this.isHidden = true;
      },
      selectInfo(country){
        this.selectedCountryIndex = this.data.countries.indexOf(country);
      },
      getImageUrl(img){
        return require('../assets/countries/' + img);
      },
      nextCountry(){
				this.selectedCountryIndex++;
				if (this.selectedCountryIndex > this.data.countries.length - 1) {
					this.selectedCountryIndex = 0;
				}
      },
      prevCountry(){
        this.currentCountryIndex--;
				if (this.currentCountryIndex < 0) {
					this.currentCountryIndex = this.data.countries.length - 1;
				}
      }
    },
    computed:{
      selectedCountry(){
        return{
          ...this.data.countries[this.selectedCountryIndex]
        }
      },
      isExpensive() {
				return this.data.countries[this.selectedCountryIndex].cost > 4000;
			},
      onSale(){
        return this.data.countries[this.selectedCountryIndex].cost < 1000;
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
