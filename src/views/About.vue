  <template>
    <v-app class="white">
      <div>
        <Content v-bind:theme="whiteTheme">
          <v-layout column>
          <div class="ml-auto mr-auto text-center cdp-title mb-4">
            <h1 class="">About</h1>
            <v-layout justify-center>
              <v-flex xs2>
                <v-divider/>
              </v-flex>
            </v-layout>
            <p>It all began as a thought: We have been given so much, what can we do to give back? This fundamental question cordially connected us to eventually begin meeting in a studio apartment, crowded over a dining table. We shared life stories, insatiable thoughts, and our dreams. As we rediscovered our hearts for those in need, our visions aligned; and these gatherings amounted to the fruition of the Common Day Project, a registered non-profit organization envisioned as a place for common people, spreading goodness across our society, through the acts of common but benevolent deeds.</p>
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
            <div class="col-lg-1 mx-auto">
              <v-img height="250px" width="200px" contain aspect-ratio="1" :src="require('../assets/sungjai.jpeg')"></v-img>
            </div>
            <div class="col-lg-8 mx-auto">
              <h2 class="mb-4 white--text">Sungjai Jang</h2>
              <p class="text-white-50">Rutgers University, Cell Bio and Neuroscience major | Senior Analyst at Samsung Electronics</p>
              <p class="text-white-50">'나의 것'이란 없다고 믿습니다. 삶 자체가 주어진 것이기 때문에, 뒤 따르는 결과 역시 내 것이 될수 없습니다. 하지만 너무나도 많은 때 주어진 것들을 '나의 것'으로 움켜 쥐려 합니다. 하루를 시작하는 경건은 잠시, 막히는 길에서 소비되는 것은 '나의 시간', 어려운 요청을 해결하는 것은 '나의 힘', 또 내게 주어지는 물질은 '나의 물질'이 됩니다. 이렇게, 내게 주어진 것들은 어느새 '나의 것'이 되고, 그 분 소유의 이 삶은 '나의 삶'이 되어 버립니다. 나에게 주어진 삶이, 더불어 주어진 시간이, 내게 모든 것을 맡기신 이의 뜻에 맞게 사용 되었으면 좋겠습니다. 그래서 나는 '나의 것'이라 생각되는 모든 것의 올바른 소유권을 날마다 인정하고, 그에 따른 책임을 실천하는 삶을 살고 싶습니다. 이것이 내가 Common Day Project를 시작하는 이유입니다.</p>
            </div>
          </div>
        </Content>
      </div>
      <div class="screenPadding">
        <Content v-bind:theme="whiteTheme">
          <div class="row">
            <div class="col-lg-1 mx-auto">
              <v-img height="250px" width="200px" contain aspect-ratio="1" :src="require('../assets/kyumin.jpeg')"></v-img>
            </div>
            <div class="col-lg-8 mx-auto">
              <h2 class="mb-4">Kyumin Park</h2>
              <p class="text-black-50">Rutgers University, Statistics major | Demand Planner at Thelios USA</p>
              <p class="text-black-50">As I was growing up, I had the luxury of having good people guiding me through life. Although I did not do anything to deserve it, they selflessly sacrificed their time and money. They did not have much, but they knew how to give good gifts to others and that has made all the difference.
              <p class="text-black-50">Knowing how precious these people are in my life, I could not stay still. Their actions have encouraged and inspired me to reach out. Reaching out not to make myself known or drastically change someone's life, but earnestly hoping the best and the brightest future for them.</p>
              <p class="text-black-50">But there is a limit of what I can do and a limit of how far I can reach. Therefore, I dream of a community of good people, giving good gifts. A community of selfless brothers and sisters reaching out to people who need. As well as a community, where people can open up about their needs without feeling ashamed or judged. A community where everyone is together and everything is in common.</p>
            </div>
          </div>
        </Content>
      </div>
      <div class="blackBackground screenPadding">
        <Content v-bind:theme="blackTheme">
          <div class="row">
            <div class="col-lg-1 mx-auto">
              <v-img height="250px" width="200px" contain aspect-ratio="1" :src="require('../assets/capki.jpeg')"></v-img>
            </div>
            <div class="col-lg-8 mx-auto">
              <h2 class="mb-4 white--text">Capki Kim</h2>
              <p class="text-white-50">Rutgers University, Computer Science major | Software Engineer at Lifion by ADP</p>
              <p class="text-white-50">I once told my younger self that I yearn to live a life working for the people around me. Ambitious, and daring it was; yet ultimately unfruitful. I pretended, and ambitions remained as thoughts.
              <p class="text-white-50">  Now, I ran out of excuses. As I confront the challenges of persistently loving others and letting go of the idols that make us mechanical, it is time to take the initiative to feel and act for those around us.</p>
              <p class="text-white-50">We are just ordinary people, only trying to do what ordinary people should do—spreading love and kindness where we can and when we can. No matter what the measurable fruition of this endeavor may be, we believe in the contagion of good hearts, by the actions of good people; and this, cannot be measured.</p>
            </div>
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
        },
        blackTheme: {
          black: true,
          white: false,
        },
        sjImg: "../assets/sungjai.jpeg"
      }
    }
  }
  </script>

  <style scoped media="screen">

  </style>
