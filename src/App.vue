<template>
  <v-app light>
    <v-content>
        <nav-bar></nav-bar>
        <router-view></router-view>
    </v-content>
<footer-bar></footer-bar>
  </v-app>
</template>

<script>
  import NavBar from '@/components/menu/NavBar';
  import FooterBar from '@/components/footer/FooterBar';

  export default {
  components: {
      NavBar,
      FooterBar
  },
    data () {
      return {
      }
    },

  }
</script>
