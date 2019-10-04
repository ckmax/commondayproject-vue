  <template>
    <v-app class="white">
        <div>
            <Content v-bind:theme="whiteTheme">
              <v-layout column justify-center>
              <div class="ml-auto mr-auto text-center cdp-title mb-4">
                <h1 class="">Newsletters</h1>
                <v-layout justify-center>
                  <v-flex xs10>
                    <v-divider/>
                  </v-flex>
                </v-layout>
                <p>Please email us @commondayproject.gmail with your email address if you wish to be subscribed to our newsletters.</p>
              </div>
              
                <v-flex class="text-center">
                  <v-btn outline fab color="grey" v-scroll-to="'#scrollTo'">
                    <v-icon>keyboard_arrow_down</v-icon>
                  </v-btn>
                </v-flex>
              </v-layout>
            </Content>
        </div>
        <div id="scrollTo" class="blackBackground screenPadding">
            <v-container fluid>
              <v-layout justify-center>
                <v-flex xs8>
                  <v-img aspect-ratio="1" contain :src="require('../assets/news_sept_1.jpg')"/>
                  <v-img aspect-ratio="1" contain :src="require('../assets/news_sept_2.jpg')"/>
                </v-flex>
              </v-layout>
            </v-container>
        </div>
    </v-app>
    
  </template>

  <script>
  import Content from "@/components/Content";

  export default {
    components: {
      Content
    },
    data() {
      return {
        whiteTheme: {
          white: true,
          black: false,
          fullHeight: true
        },

        blackTheme: {
          black: true,
          white: false,
          fullHeight: true
        }
      }
    }
  }
  </script>

  <style scoped media="screen">
  
  </style>
