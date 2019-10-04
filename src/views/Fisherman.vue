  <template>
    <v-app class="white">
        <div>
            <Content v-bind:theme="whiteTheme">
            <v-layout column>
            <div class="ml-auto mr-auto text-center cdp-title">
                <h1 class="">Project Fisherman</h1>
                <v-layout justify-center>
                  <v-flex xs4>
                    <v-divider/>
                  </v-flex>
                </v-layout>
                <p>Project Fisherman is an academic scholarship program designed to aid aspiring students in need. By supporting students continue their education, we are planting the seeds that will ultimately grow to instill hope and compassion wherever they go. </p>
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
            <Content v-bind:theme="blackTheme">
            <div class="row">
                <div class="col-lg-8 mx-auto">
                <h2 class="mb-4 white--text">Mission</h2>
                <p class="text-white-50">We give because we first received. For everything we have did not originate from us but were also given freely; therefore we gather the little that we have for anyone who needs. Believing, the act of giving will continue.</p>
                </div>
            </div>
            </Content>
        </div>

        <div class="screenPadding">
        <Content v-bind:theme="whiteTheme">
          <v-layout justify-center row wrap>
            <v-flex xs12>
              <h2 class="mb-4">The second phase of Project Fisherman has ended, please stay tuned for the upcoming third phase.</h2>
            </v-flex>
            <v-divider/>
            <!-- <v-flex xs12 md4>
              <v-card class="ma-4">
                <v-card-title>
                    <div>
                      <h3>Essay</h3>
                      <div>Pick a topic of your choice and write as freely as you wish, under 500 words.</div>
                    </div>
                </v-card-title>
              </v-card>
            </v-flex>
            <v-divider></v-divider>
            <v-flex xs12 md4>
              <v-card class="ma-4">
                <v-card-title>
                    <div>
                      <h3>Application</h3> 
                      <div>Send the essay and <a href="../assets/application.pdf" download="cdp_application.pdf">application</a> to commondayproject@gmail.com</div>
                      <div>Deadline: 08/17/2019</div>
                    </div>
                </v-card-title>
              </v-card>
            </v-flex>
            <v-flex xs12 md4>
              <v-card class="ma-4">
                <v-card-title>
                    <div>
                      <h3>Requirement</h3>
                      <div>Any undergraduate/graduate student affiliated with RKCM (Rutgers Korean Campus Ministry) and/or Calvary Korean United Methodist Church</div>
                    </div>
                </v-card-title>
              </v-card>
            </v-flex> -->
          </v-layout>
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
