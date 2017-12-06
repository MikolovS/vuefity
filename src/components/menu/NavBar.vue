<template>
  <div class="main">
    <v-navigation-drawer
            temporary
            v-model="drawer"
            absolute
            fixed
            :clipped="clipped"
            app
     value="">
      <v-list>
        <v-list-tile value="true" v-for="(item, i) in items" :key="i">
          <v-list-tile-action>
            <v-avatar
                    class="grey lighten-4"
            >
              <img :src="user.img" alt="avatar">
            </v-avatar>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="user.name"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
          <v-toolbar flat>
            <v-list>
                <v-list-tile>
                    <v-list-tile-title class="title">
                        Application
                    </v-list-tile-title>
                </v-list-tile>
            </v-list>
          </v-toolbar>
          <v-divider></v-divider>
          <v-list dense class="pt-0">
              <v-list-tile v-for="item in navLinks" :key="item.title" :href="item.to">
                <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
          </v-list>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
        <v-toolbar-items v-for="(item, i) in navLinks" :key="i" class="hidden-sm-and-down">
            <v-btn flat :href="item.to" :class="[active(item.to) ? 'btn--active': '']">{{item.title}}</v-btn>
        </v-toolbar-items>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>
          {{user.name}}
          <v-avatar
                  class="grey lighten-4"
          >
            <img :src="user.img" alt="avatar">
          </v-avatar>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
      <router-view></router-view>
  </div>
</template>

<script>
  import VContent from "vuetify/es5/components/VGrid/VContent";
  import VDivider from "vuetify/es5/components/VDivider/VDivider";
  import VAvatar from "vuetify/es5/components/VAvatar/VAvatar";

  export default {
      components: {
          VAvatar,
          VDivider,
          VContent
      },
      computed: {

      },
      data () {
          return {
              name: 'NavBar',
              clipped: false,
              drawer: false,
              fixed: true,
              items: [{
                  icon: 'bubble_chart',
                  title: 'Inspire'
              }],
              title: 'Vuetify.js',

              navLinks: [
                  {
                      title: 'Home',
                      to: '#/',
                      icon: 'bubble_chart',
                  },
                  {
                      title: 'Qwerty',
                      to: '#/qwerty',
                      icon: 'bubble_chart',
                  },
                  {
                      title: 'Блог',
                      to: '#/blog',
                      icon: 'bubble_chart',
                  }
              ],

              user : {
                  name: 'Test Name',
                  img: 'src/assets/vuetify.png'
              }
          }
      },
      methods: {
          active(path) {
              return ('#' + this.$route.path) === path
          }
      }
  }
</script>

<style scoped>
    .main {
        min-height: 100%;
    }
</style>
