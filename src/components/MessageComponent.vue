<template>
  <div>
    <input type="text" @keyup.enter="setMessage()" v-model="msg" placeholder="Typ message">
    <button type="button" @click="clearMessage()">Clear</button>
    <h2>Huidige message   {{ message }}</h2>
  </div>
</template>

<script>
export default {
  name: 'MessageComponent',
  data(){
    return{
      msg: ''
    }
  },
  methods: {
    setMessage(){
      this.$store.dispatch('setMessage', this.msg);
    },
    clearMessage(){
      this.$store.dispatch('clearMessage');
    }
  },
  computed: {
    message(){
      return this.$store.state.message;
    }
  }
}
</script>

<style lang="css" scoped>
</style>
