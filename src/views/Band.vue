  <template>
    <v-app class="white">
      <div>
          <Content v-bind:theme="whiteTheme">
          <div class="ml-auto mr-auto text-center cdp-title">
              <h1 class="">Project Band</h1>
              <v-layout justify-center>
                <v-flex xs10>
                  <v-divider/>
                </v-flex>
              </v-layout>
              <p>Project Band is a volunteer project at local nursing homes, performing and sharing our talents for the elderly with the hope of spreading love.</p>
            </div>
          </Content>
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
