<template>
    <v-container align-center v-bind:class="theme" class="customCSS" >
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
    font-size: 4rem;
    line-height: 4rem;
  }

  .fullHeight {
    height: 100vh;
  }
  
  .customCSS {
    display: flex!important;
  }
  /* @media only screen and (min-width).cdp-title {

  } */
</style>
