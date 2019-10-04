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
        <div id="home" class="ml-auto mr-auto text-left cdp-title">
          <h1 class="mx-auto">Common people</h1>
          <h1 class="mx-auto">Common things</h1>
          <h1 class="mx-auto"><b>Common day</b></h1>
        </div>
      </Content>
      <Footer/>
    </v-app>
  </template>

  <script>
  import Content from "@/components/Content";
  import Footer from '@/components/Footer'

  export default {
    components: {
      Content,
      Footer
    }
  }
  </script>

  <style scoped media="screen">
 
  </style>
