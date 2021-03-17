<template>
  <div>
    <h2>Landen in Europa</h2>
    <ul class="list-group">
      <li v-for="country of countries" @click="getCountry(country.name)"
          :key="country.name" class="list-group-item">
          <span>
              <img :src="country.flag" class="imgFlag" alt="Flag of this country">
          </span>
          <h4>{{ country.name }}</h4>
          <p>{{ country.capital }}</p>
          <p>{{ country.borders }}</p>
          <p>{{ country.nativeName }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ApiCountryComponent',
  data(){
    return{
      url: 'https://restcountries.eu/rest/v2/regionalbloc/eu?fields=name;capital;flag;borders;nativeName;',
      countries: [],
      errors: []
    }
  },
  created() {
    axios.get(this.url)
    .then(response => this.countries = response.data)
    .catch(err => this.errors.push(err))
  },
  methods: {
    getCountry(name) {
      this.$router.push({
        name: 'api-detail',
        params: {
        name: name
        }
      })
    }
  }
}
</script>

<style lang="css" scoped>
.imgFlag {
        max-width: 80px;
        border: 1px solid gray;
        border-radius: 8px;
        margin-right: 4px;
    }
</style>
