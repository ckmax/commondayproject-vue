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
                <p class="text-white-50">We give because we first received. For everything we have did not originate from us but was also given freely; therefore we gather the little that we have for anyone who needs. Believing, the act of giving will continue.</p>
                </div>
            </div>
            </Content>
        </div>

        <div class="screenPadding">
        <Content v-bind:theme="whiteTheme">
          <v-layout justify-center row wrap>
            <v-flex xs12>
              <h2 class="mb-4">The 4th Project Fisherman has started, and this is how to apply:</h2>
            </v-flex>
            <v-divider/>
             <v-flex xs12 md3>
              <v-card class="ma-4">
                <v-card-title>
                    <div>
                      <h3>Application</h3> 
                      <div>Send the essay, statement of need, a description of how you are doing, and <a href="./application.pdf" download>application</a> to <strong>commondayproject@gmail.com</strong></div>
                      <br/>
                      <div><strong>Deadline: 07/25/2020</strong></div>
                      <div><strong>Announcement: 08/08/2020</strong></div>
                    </div>
                </v-card-title>
              </v-card>
            </v-flex>
            <v-flex xs12 md3>
              <v-card class="ma-4">
                <v-card-title>
                    <div>
                      <h3>Essay</h3>
                      <div class="mb-4">지난 몇달을 지내면서 많은 생각을 했을꺼라 짐작합니다. 어느 누구에겐 마음이 아팠고 다른 누군가에겐 몸이 아팠던 시간들, 이것이 하나님의 계획 안에 있는 시간이었다고 생각합니까? 그렇다고 생각한다면, 당신은 지난 시간동안 하나님과 어떠한 관계를 가졌기에 그것이 하나님의 계획 안에 있는 시간이었다고 생각하시나요? 하나님은 당신에게 어떤 마음을 주셨나요?</div>
                      <div>The past few months have truly been a time to reflect. It was mentally draining for some, and many have also died. In the midst of such an unprecedented pandemic, do you still believe that this is according to God’s plan? If so, what kind of relationship did you have with God that led you to believe so? What kind of heart has God given you?<strong>(minimum of 500 words)</strong></div>
                    </div>
                </v-card-title>
              </v-card>
            </v-flex>
            <v-divider></v-divider>
            <v-flex xs12 md3>
              <v-card class="ma-4">
                <v-card-title>
                    <div>
                      <h3>Statement of Need</h3> 
                      <div>As part of our effort to assess the financial needs of our applicants, please describe to us why you need this scholarship to the best of your ability. <strong>(less than 300 words)</strong></div>
                    </div>
                </v-card-title>
              </v-card>
              <v-card class="ma-4">
                <v-card-title>
                    <div>
                      <h3>How are you doing?</h3> 
                      <div>Given the current situation, we're curious. No specific guidelines here, freely let us know how you're doing right now.</div>
                    </div>
                </v-card-title>
              </v-card>
            </v-flex>
            <v-flex xs12 md3>
              <v-card class="ma-4">
                <v-card-title>
                    <div>
                      <h3>Requirement</h3>
                      <div>Any undergraduate/graduate student affiliated with RKCM (Rutgers Korean Campus Ministry) and/or Calvary Korean United Methodist Church</div>
                    </div>
                </v-card-title>
              </v-card>
            </v-flex>
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
