import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';
const url = 'https://freequote.herokuapp.com/';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      counter: 0,
      message: '',
      quote: '',
      author: ''
  },
  mutations: {
    INCREMENT(state, status) {
        state.counter += status;
      },
      DECREMENT(state, status) {
        state.counter -= status;
      },
      RESET(state){
        state.counter = 0;
      },
      SETMESSAGE(state, status){
        state.message = status;
      },
      CLEARMESSAGE(state){
        state.message = ' ';
      },
      SETQUOTE(state, status){
        state.quote = status;
      },
      SETAUTHOR(state, status){
        state.author = status;
      }
    },
    actions:{
      increment(context, value){
        context.commit('INCREMENT', value);
      },
      decrement(context, value){
        context.commit('DECREMENT', value);
      },
      reset(context){
        context.commit('RESET');
      },
      setMessage(context, value){
        context.commit('SETMESSAGE', value);
      },
      clearMessage(context){
        context.commit('CLEARMESSAGE');
      },
      fetchQuote(context){
        axios.get(url).then(result =>{
          context.commit('SETQUOTE', result.data.quote);
          context.commit('SETAUTHOR', result.data.author);
        })
      }
    }
})
