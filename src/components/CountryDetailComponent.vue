<template>
  <div>
    <h2>Selected Country</h2>
    <div class="card">
      <span class="card-title">{{ selectedCountry.name}}-{{ selectedCountry.capital}}</span>
      <img :src="getImageUrl(selectedCountry.img)" :alt="selectedCountry.img">
      <p>{{ selectedCountry.details}}</p>
      <ul class="list-group">
        <li class="list-group-item" v-if="isExpensive">
          <span class="badge badge-danger badge-pill">Expensive!</span>
        </li>
        <li class="list-group-item" v-if="onSale">
          <span class="badge badge-success badge-pill">On Sale!</span>
        </li>
      </ul>
      <span>
        <button @click="setRating(1)" class="btn btn-success btn-lg">+1</button>
        <button @click="setRating(-1)" class="btn btn-danger btn-lg">-1</button>
        <button @click="setFavorite(true)" class="btn btn-primary float-right btn-lg">★</button>
        <button @click="setFavorite(false)" class="btn btn-primary float-right btn-lg">X</button>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
  name: 'CountryDetailComponent',
  props: {
    selectedCountry: {
      type: Object,
      required: false,
      default(){
        return{
          id: -1,
          name: 'None',
          capital: 'None',
          img: '',
          details: '',
          cost: -1
        }
      }
    }
  },
  methods:{
    getImageUrl(img){
      return require('../assets/countries/' + img);
    },
    setRating(value){
      this.$emit('rating', value);
    },
    setFavorite(value){
      this.$emit('favorite', value);
    }
  },
  computed: {
    isExpensive() {
      return this.selectedCountry.cost > 4000;
    },
    onSale(){
      return this.selectedCountry.cost < 1000;
    }
  }
}
</script>

<style lang="css" scoped>
</style>
