<template>
  <v-app light>
    <nav-bar></nav-bar>
    <!--<v-content app>-->
        <!--&lt;!&ndash;<router-view></router-view>&ndash;&gt;-->
    <!--</v-content>-->
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
