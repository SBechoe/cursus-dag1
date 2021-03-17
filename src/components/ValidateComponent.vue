<template>
  <div class="msg" :class="msgType">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'ValidateComponent',
  props: {
    msg: {
      type: String,
      required: true
    },
    msgType:{
      type: String,
      validator(value){
        return['error', 'info', 'success'].includes(value);
      }
    }
  }
}
</script>

<style lang="css" scoped>
  .msg {
    padding: 10px;
    margin: 4px;
    width: 50%;
    min-width: 120px;
    border: 1px solid black;
    border-radius: 4px;
  }

  /* error class*/
  .error {
    background-color: darkred;
    color: white;
  }

  /* info*/
  .info {
    background-color: deepskyblue;
  }

  /* success*/
  .success {
    background-color: #42b983;
  }
</style>
