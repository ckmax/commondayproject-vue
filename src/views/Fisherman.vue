  <template>
    <v-app class="white">
        <div>
            <Content v-bind:theme="whiteTheme">
            <div class="ml-auto mr-auto text-center cdp-title">
                <h1 class="">Project Fisherman</h1>
                <p>Scholarship</p>
            </div>
            </Content>
        </div>
        <div class="blackBackground">
            <Content v-bind:theme="blackTheme">
            <div class="row">
                <div class="col-8 mx-auto">
                <h2 class="mb-4 white--text">Mission</h2>
                <p class="text-white-50">We give because we first received. For everything we have did not originate from us but were also given freely; therefore we gather the little that we have for anyone who needs. Believing, the act of giving will continue.</p>
                </div>
            </div>
            </Content>
        </div>

        <div>
        <Content v-bind:theme="whiteTheme">
          <div class="row">
            <div class="col-8 mx-auto">
              <h2 class="mb-4">The 1st Fisherman Scholarship has concluded. We expect to begin our second scholarship in Summer 2019.</h2>
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

    .blackBackground {
      background-color: black;
    }
    /* .y-center {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
    } */
/* 
    .cdp-title h1 {
      font-size: 3rem;
      line-height: 4rem;
    } */

    /* @media only screen and (min-width).cdp-title {

    } */
  </style>
