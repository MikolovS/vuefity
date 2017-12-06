<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media
                class="white--text"
                height="300px"
                src="src/assets/section.jpg"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Top 10 Australian beaches</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-title>
          <div>
            <span class="grey--text">Number 10</span><br>
            <span>Whitehaven Beach</span><br>
            <span>Whitsunday Island, Whitsunday Islands</span>
          </div>
        </v-card-title>

          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>

      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>

import VCard from "vuetify/es5/components/VCard/VCard";
import VCardMedia from "vuetify/es5/components/VCard/VCardMedia";
import VCardTitle from "vuetify/es5/components/VCard/VCardTitle";

export default {
    components: {
        VCardTitle,
        VCardMedia,
        VCard},
    name: 'Blog',
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
