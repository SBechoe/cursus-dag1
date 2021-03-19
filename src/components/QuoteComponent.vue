<template>
  <div class="quoteContainer">
    <h1 class="quote text-white">
      <span>{{ quote }}</span> - <span class="author">{{ author }}</span>
    </h1>
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
  .quoteContainer{
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .quote{
    font-weight: 200;
    font-family: inherit;
    font-size: 4vw;
    width: 70vw;
  }
  .author{
    font-style: italic;
    font-weight: 200;
    font-size: 3vw;
  }
</style>
