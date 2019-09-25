<template>
    <v-container align-center v-bind:class="theme" class="customCSS fullHeight" >
      <slot></slot>
    </v-container>
</template>

<script>
export default {
  props: ['theme']
}
</script>


<style scoped media="screen">

  .cdp-title h1 {
    font-size: calc(2.5rem + 1.5vw);
    line-height: calc(3rem + 1.5vw);
  }
  
  .customCSS {
    display: flex!important;
  }
</style>
