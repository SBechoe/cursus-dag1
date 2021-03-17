<template>
  <div>
    <h1>{{ counter }}</h1>
    <button type="button" @click="increment()">+1</button>
    <button type="button" @click="decrement()">-1</button>
    <button type="button" @click="reset()">Reset</button>
  </div>
</template>

<script>
export default {
  name: 'CounterComponent',
  methods: {
    increment(){
      this.$store.dispatch('increment', 1);
    },
    decrement(){
      this.$store.dispatch('decrement', 1);
    },
    reset(){
      this.$store.dispatch('reset');
    }
  },
  computed: {
    counter(){
      return this.$store.state.counter;
    }
  }
}
</script>

<style lang="css" scoped>
</style>
