<template>
  <v-app light>
      <v-content>
          <nav-bar></nav-bar>
      </v-content>
    <footer-bar></footer-bar>
  </v-app>
</template>

<script>
  import NavBar from '@/components/menu/NavBar';
  import FooterBar from '@/components/footer/FooterBar';
  import VContent from "vuetify/es5/components/VGrid/VContent";

  export default {
      name: 'app',
  components: {
      VContent,
      NavBar,
      FooterBar
  },
    data () {
      return {
      }
    }
  }
</script>
