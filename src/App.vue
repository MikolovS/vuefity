<template>
  <v-app light>
    <nav-bar></nav-bar>
    <footer-bar></footer-bar>
  </v-app>
</template>

<script>
  import NavBar from '@/components/menu/NavBar';
  import FooterBar from '@/components/footer/FooterBar';

  export default {
      name: 'app',
  components: {
      NavBar,
      FooterBar
  },
    data () {
      return {
      }
    }
  }
</script>
