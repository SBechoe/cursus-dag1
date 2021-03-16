<template>
  <div class="container">
    <div class="card">
      <h2 v-if="!name">Nog geen naam gevonden...</h2>
      <h2 v-if="name">{{ name }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowPerson',
		props: {
			name: String
		},
    updated(){
      console.log("Component is geupdate. Nieuwe naam is: " + this.name);
    }
}
</script>

<style lang="css" scoped>
</style>
