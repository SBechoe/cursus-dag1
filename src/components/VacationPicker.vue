<template>
  <div class="container-fluid">
    <div class="row" hidden>
      <div class="col-7">
        <div class="card bg-secondary">
          <h2>{{ selectedCountry.name}}</h2>
          <h3>
            {{ selectedCountry.capital}}
            <span v-if="isExpensive" class="badge badge-danger">Expensive!</span>
            <span v-if="onSale" class="badge badge-success">Sale!</span>
          </h3>
          <h5 v-if="selectedCountry.rating !== 0">
            my rating:
            <span class="badge badge-secondary badge-pill">
              {{ selectedCountry.rating }}
            </span>
          </h5>
          <h5 v-if="selectedCountry.favorite">
            <span class="badge badge-secondary badge-pill">
              {{ selectedCountry.favorite }}
            </span>
          </h5>
        </div>
        <button class="btn btn-info" @click="prevCountry()">Previous</button>
        <button class="btn btn-info" @click="nextCountry()">Next</button>
      </div>
      <div class="col-5">
        <CollapseSection>
          <CountryDetailComponent :selectedCountry="selectedCountry"
          @rating="onRating($event)" @favorite="onFavorite($event)"/>
        </CollapseSection>
      </div>
      <hr>
    </div>
    <div class="row" hidden>
      <div class="col">
        <h1>Counter for fun</h1>
        <h2>{{counter}}</h2>
        <button class="btn btn-success" @click="increase()">+1</button>
        <button class="btn btn-danger" @click="decrease()">-1</button>
        <button class="btn btn-info" @click="reset()">Reset</button>
      </div>
    </div>
    <div class="row" hidden>
      <div class="col-6">
        <ul class="list-group">
          <li v-for="country in data.countries"
            :key="country.id"
            class="list-group-item">
              <span :id="country.id"
                    :title="country.details">
                  {{ country.name }}
              </span>
          </li>
        </ul>
      </div>
      <div class="col-6">
          <input type="text" v-model="newCountry" @keyup.enter="addCountry()"
          placeholder="Country Name">
          <ul class="list-group">
            <li class="list-group-item"
                v-for="country in newCountries" :key="country">
              {{ country }}
            </li>
          </ul>
      </div>
      <hr>
    </div>
    <div class="row" hidden>
      <div class="col-6">
        <ul class="list-group">
          <li v-for="country in data.countries"
            :key="country.id"
            class="list-group-item">
              <input type="checkbox" :value="country.name" v-model="selectedCountries">
              {{country.name}}
          </li>
        </ul>
      </div>
      <div class="col-6">
            {{ selectedCountries}}
      </div>
      <hr>
    </div>
    <div class="row" hidden>
      <div class="col">
        <input type="text" v-model="textField" placeholder="Input Text">
        <input type="text" readonly v-model="textField" placeholder="Input Text">
      </div>
      <hr>
    </div>
    <div class="row" hidden>
      <div class="col">
        <input type="text" class="form-control-md" v-model="person.firstName">
        <button type="button" @click="setName()" name="button">Set name</button>
        <ShowPerson :name="personName"/>
        <h5 v-if="person.firstName === 'Sapna'">{{successMsg}}</h5>
        <h5 v-else>{{errorMsg}}</h5>
        <hr>
      </div>
    </div>
    <div class="row" hidden>
      <div class="col-10">
        <ul class="list-group">
          <li v-for="(country,index) in data.countries"
            :key="country.id"
            class="list-group-item" :style="colorCountry(index)">
              <span :id="country.id"
                    :title="country.details">
                  {{ country.name }}
              </span>
          </li>
        </ul>
      </div>
      <div class="col-2">
        <h6>Choose a price:</h6>
        <select name="cars" v-model="selectedCost">
          <option value="0">0</option>
          <option value="1000">1000</option>
          <option value="2000">2000</option>
          <option value="3000">3000</option>
          <option value="4000">4000</option>
        </select>
      </div>
      <hr>
    </div>
    <div class="row" hidden>
      <div class="col-2">
        <button type="button" class="btn btn-lg btn-primary" @click="toggleClick()">Toggle first card</button>
      </div>
      <div class="col-5">
        <div class="card" :class="{'active' : isActive}" >
          <h1>First Card</h1>
        </div>
      </div>
      <div class="col-5">
        <div class="card" @mouseover="toggleMouse()" @mouseout="toggleMouse()" :class="{'mouse' : atMouse}">
          <h1>Second Card</h1>
        </div>
      </div>
    </div>
    <div class="row" hidden>
      <div class="col">
        <ApiCountryComponent/>
      </div>
    </div>
    <div class="row" hidden>
      <div class="col">
        <CounterComponent/>
        <MessageComponent/>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <QuoteComponent/>
      </div>
    </div>
  </div>
</template>

<script>
import countryData from '../data/countryData';
import mixinsData from '../data/mixins';
import ShowPerson from '../components/ShowPerson.vue'
import CountryDetailComponent from '../components/CountryDetailComponent.vue'
import CollapseSection from '../shared/CollapseSection.vue'
import ApiCountryComponent from '../components/ApiCountryComponent.vue'
import CounterComponent from '../components/CounterComponent.vue'
import MessageComponent from '../components/MessageComponent.vue'
import QuoteComponent from '../components/QuoteComponent.vue'


  export default {
    name: 'VacationPicker',
    components:{
      CountryDetailComponent,
      ShowPerson,
      CollapseSection,
      ApiCountryComponent,
      CounterComponent,
      MessageComponent,
      QuoteComponent
    },
    data(){
      return{
        data: countryData,
        counter: 0,
        selectedCountryIndex: 0,
        newCountry: '',
        newCountries: [],
        selectedCountries: [],
        textField: '',
        person: {
          firstName: ''
        },
        personName: '',
        selectedCost: 0,
        isActive: false,
        atMouse: false
      }
    },
    mixins: [mixinsData],
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
      hideList(){
        this.isHidden = true;
      },
      selectInfo(country){
        this.selectedCountryIndex = this.data.countries.indexOf(country);
      },
      nextCountry(){
				this.selectedCountryIndex++;
				if (this.selectedCountryIndex > this.data.countries.length - 1) {
					this.selectedCountryIndex = 0;
				}
      },
      prevCountry(){
        this.selectedCountryIndex--;
				if (this.selectedCountryIndex < 0) {
					this.selectedCountryIndex = this.data.countries.length - 1;
				}
      },
      addCountry(){
        this.newCountries.push(this.newCountry);
        this.newCountry=' ';
      },
      setName(){
        this.personName = this.person.firstName;
      },
      colorCountry(index){
        return{
          backgroundColor:
            this.data.countries[index].cost < this.selectedCost ?
            'darkseagreen' : 'azure'
        }
      },
      toggleClick(){
        this.isActive = !this.isActive;
      },
      toggleMouse(){
        this.atMouse = !this.atMouse;
      },
      onRating(rating){
        this.data.countries[this.selectedCountryIndex].rating += rating;
      },
      onFavorite(favorite){
        this.data.countries[this.selectedCountryIndex].favorite = favorite;
      }
    },
    computed:{
      selectedCountry(){
        return{
          ...this.data.countries[this.selectedCountryIndex]
        }
      },
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
  .active{
    background-color: darkseagreen;
  }

  .mouse{
    background-color: red;
  }
</style>
