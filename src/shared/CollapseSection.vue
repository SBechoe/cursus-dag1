<template>
  <div>
    <div class="alert alert-info" style="cursor: pointer">
      <span v-if="open" @click="open = !open">&#x25B2; Collapse</span>
      <span v-if="!open" @click="open = !open">&#x25BC; Expand</span>
    </div>
    <transition name="fade">
      <slot v-if="open"></slot>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "CollapseSection",
    data() {
      return {
        open: false
      }
    }
  }
</script>

<style lang="css" scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
