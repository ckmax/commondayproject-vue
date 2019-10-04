  <template>
    <v-app class="white">
      <div>
        <Content v-bind:theme="whiteTheme">
          <div class="ml-auto mr-auto text-center cdp-title">
            <h1 class="">Donation</h1>
            <v-layout justify-center>
              <v-flex xs3>
                <v-divider/>
              </v-flex>
            </v-layout>
            <p>In order to assist more aspiring students and projects, the need for financial support is inevitably an area we cannot neglect. If you would like to partake in our mission, please either Venmo @CommonDayProject or email us at commondayproject@gmail.com for additional means of donation. 100% of your donations will go directly to the students and this will be reflected in our financial reports.</p>
          </div>
        </Content>
      </div>

      <!-- <div >
        <div>
           <div class="ml-auto mr-auto text-center cdp-title">
              <h1>Those who gave</h1>
           </div>
        </div>
        <Content> ``
          <v-layout row wrap>
            <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
              <v-card flat class="text-xs-center ma-3 border">
                <v-responsive class="pt-4">
                  <v-avatar size="150" class="grey lighten-2">
                    <img :src="person.avatar">
                  </v-avatar>
                </v-responsive>
                <v-card-text>
                  <div class="subheading">{{ person.name }}</div>
                  <div class="grey--text">{{ person.msg }}</div>
                </v-card-text>
                <v-card-actions>
                  <v-btn flat color="grey">
                    <v-icon small left>message</v-icon>
                    <span class="">Message</span>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </Content>
      </div> -->
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
        team: [
          { name: 'Onepunch man', msg: 'I hope that you guys achieve your dream.', avatar:'/onepunchman.png' },
          { name: 'Ryu', msg: '...', avatar: '/avatar-2.png' },
          { name: 'Chun Li', msg: 'Web developer', avatar: '/avatar-3.png' },
          { name: 'Gouken', msg: 'Social media maverick', avatar: '/avatar-4.png' },
          { name: 'Yoshi', msg: 'Sales guru', avatar: '/avatar-5.png'}
        ],

        whiteTheme: {
          white: true,
          black: false,
        },
        blackTheme: {
          black: true,
          white: false,
        }
      }
    }
  }
  </script>

  <style scoped media="screen">
  .border {
    border-color: black;
    border-style: double;

  }
  </style>
