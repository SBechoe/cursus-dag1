<template>
  <div>
    <h1>{{ quote }} - {{ author }}</h1>
  </div>
</template>

<script>
export default {
  name: 'QuoteComponent',
  methods:{
    makeQuote(){
      this.$store.dispatch('fetchQuote');
    }
  },
  created(){
    this.makeQuote();
  },
  computed:{
    quote(){
      return this.$store.state.quote;
    },
    author(){
      return this.$store.state.author;
    }
  }
}
</script>

<style lang="css" scoped>
</style>
