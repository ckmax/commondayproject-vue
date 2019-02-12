  <template>
    <!-- <v-container fluid class="white">
      <v-layout align-center justify-center row fill-height>
        <v-flex class="cdp-title text-center ml-auto mr-auto">
          <h1 class="">Common people</h1>
          <h1 class="">Common things</h1>
          <h1 class=""><b>Common day</b></h1>
        </v-flex>
      </v-layout>
    </v-container> -->

    <v-app class="white">
      <Content>
        <div class="ml-auto mr-auto text-left cdp-title">
          <h1 class="mx-auto">Common people</h1>
          <h1 class="mx-auto">Common things</h1>
          <h1 class="mx-auto"><b>Common day</b></h1>
        </div>
      </Content>
    </v-app>
  </template>

  <script>
  import Content from "@/components/Content";

  export default {
    components: {
      Content
    }
  }
  </script>

  <style scoped media="screen">
    
    .cdp-title h1 {
      font-size: 3rem;
      line-height: 4rem;
    }

    /* .y-center {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
    } */
/* 

    /* @media only screen and (min-width).cdp-title {

    } */
  </style>
