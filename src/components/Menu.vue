<template>
  <div id="side-menu">
    <input type="checkbox" id="menuToggler" class="input-toggler" ref="toggler"/>
    <label for="menuToggler" class="menu-toggler"> <span class="menu-toggler__line"></span> <span class="menu-toggler__line"></span> <span class="menu-toggler__line"></span> </label>
    <aside class="sidebar">
      <ul class="menu text-center" v-on:click="toggleMenu">
        <v-layout>
          <v-flex md6>
            <img id="logo" src="../assets/cdp_logo_full.jpeg" aspect-ratio="1"/>
          </v-flex>
        </v-layout>
          <!-- <img id="logo" src="../assets/cdp_logo.jpeg" aspect-ratio="1"/> -->
        <li class="menu__item"><router-link to="/" class="menu__link">Home</router-link></li>
        <li class="menu__item"><router-link to="/about" class="menu__link">About</router-link></li>
        <li class="menu__item"><router-link to="/donation" class="menu__link">Donation</router-link></li>
        <hr/>
        <li class="menu__item"><router-link to="/fisherman" class="menu__link">Project Fisherman</router-link></li>
      </ul>

      <!-- <v-layout align-end justify-center>
        <v-icon small class="mr-2 ml-5 mb-3">mail</v-icon>
        <p>commondayproject@gmail.com</p>
      </v-layout>             -->
    </aside>

    
  </div>
</template>

<script>
export default {
    methods: {
      toggleMenu(){
        this.$refs.toggler.checked = !this.$refs.toggler.checked
      }
    }

}
</script>

<style media="screen">

:root {  --sidebar-width: 100%;
--toggler-size: 30px;
}

.wrapper {
min-height: 100vh;
min-width: 100vw;
background: AliceBlue;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
}

.sidebar, .content {
-webkit-transition: all .25s ease-out;
transition: all .25s ease-out;
}

.sidebar {
width: var(--sidebar-width);
-webkit-transform: translateX(calc(var(--sidebar-width) * -1));
transform: translateX(calc(var(--sidebar-width) * -1));
/*  background: -webkit-linear-gradient(top left, Tomato, Wheat);
background: linear-gradient(to bottom right, Tomato, Wheat);*/
background: white;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
position: absolute;
top: 0;
height: 100vh;
opacity: .5;
}

.content {
width: 100%;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
}

.menu { list-style-type: none; padding: 0;}

.menu__link {
color: black;
text-decoration: none;
/*  font-size: 10vmin;
line-height: 15vmin;*/
line-height: 7vmin;
font-size: 3vmin;
-webkit-transition: all .25s ease-out;
transition: all .25s ease-out;
}

.menu__link:hover, .menu__link:focus, .menu__link:active { color: Gold; }

.menu-toggler {
display: block;
width: var(--toggler-size);
height: var(--toggler-size);
position: relative;
position: fixed;
top: 15px;
left: 15px;
cursor: pointer;
z-index: 1;
}

.menu-toggler__line {
height: calc(var(--toggler-size) / 7);
background: black;
position: absolute;
left: 0;
right: 0;
-webkit-transition: all .25s ease-out;
transition: all .25s ease-out;
border: 1px solid white;
}

.menu-toggler__line:nth-child(2) {  top: calc(var(--toggler-size) / 5 * 2);
}

.menu-toggler__line:nth-child(3) {  top: calc(var(--toggler-size) / 5 * 4);
}

.input-toggler {
position: absolute;
left: -100%;
}

.input-toggler:checked ~ .menu-toggler .menu-toggler__line { background: black; }

.input-toggler:checked ~ .menu-toggler .menu-toggler__line:nth-child(1) {  -webkit-transform: translateY(calc(var(--toggler-size) / 5 * 2)) rotate(45deg);
transform: translateY(calc(var(--toggler-size) / 5 * 2)) rotate(45deg);
}

.input-toggler:checked ~ .menu-toggler .menu-toggler__line:nth-child(2) { opacity: 0; }

.input-toggler:checked ~ .menu-toggler .menu-toggler__line:nth-child(3) {  -webkit-transform: translateY(calc(var(--toggler-size) / 5 * -2)) rotate(-45deg);
transform: translateY(calc(var(--toggler-size) / 5 * -2)) rotate(-45deg);
}

.input-toggler:checked ~ .sidebar {
-webkit-transform: translateX(0);
transform: translateX(0);
opacity: .98;
}

#side-menu {
z-index: 99 !important;
position: relative;
}

#logo {
  position: absolute;
  top:15%;
  width:15%;
  left:42%
}

</style>
