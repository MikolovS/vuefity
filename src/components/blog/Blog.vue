<template>
  <v-container fluid v-bind="{ [`grid-list-${'xs'}`]: true }">
    <v-layout row wrap>
      <v-flex
        xs12
        sm8 offset-sm2
        md8 offset-md2
        lg6 offset-lg3
        v-for="(post, i) in posts"
        :key="i"
      >
        <v-card>
          <v-card-media
            class="white--text"
            :src="post.img"
            height="450px"
            @click="openModal(post)"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
              </v-layout>
            </v-container>
          </v-card-media>
          <v-btn icon>
            <v-icon>favorite</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>bookmark</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>share</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-card-title>
            <div>
              <span class="grey--text">{{post.title}}</span><br>
              <span v-for="(hashtag, n) in post.hashtags" :key="n">{{hashtag}}</span>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
    <modal-blog v-if="dialog" :post="selectedPost" :dialog.sync="dialog"></modal-blog>
  </v-container>
</template>

<script>
import VCard from "vuetify/es5/components/VCard/VCard";
import VCardMedia from "vuetify/es5/components/VCard/VCardMedia";
import VCardTitle from "vuetify/es5/components/VCard/VCardTitle";
import ModalBlog from "@/components/blog/ModalBlog"

export default {
    components: {
        VCardTitle,
        VCardMedia,
        VCard,
        ModalBlog
    },
    name: 'Blog',
  data () {
    return {
        dialog: false,
        selectedPost: null,
        posts: [
            {
                title: 'Test title',
                img: 'src/assets/section.jpg',
                hashtags: [
                    '#test_hashtag',
                    '#test_hashtag1',
                    '#test_hashtag2',
                ],
                likes: 173,
                comments:{
                    username: 'Test User',
                    text: 'goood!'
                }
            },
            {
                title: 'Test title2',
                img: 'src/assets/plane.jpg',
                hashtags: [
                    '#test_hashtag',
                    '#test_hashtag1',
                    '#test_hashtag2',
                ],
                likes: 63,
                comments:[
                    {
                    username: 'Test2 User2',
                    text: 'aaaaaaaa!'
                    },
                    {
                        username: 'Test3 User23',
                        text: 'a3423432aa!'
                    }
                ]
            },
            {
                title: 'Test3 title3',
                img: 'src/assets/section.jpg',
                hashtags: [
                    '#teaweda',
                    '#te1231231',
                    '#tawdadaw',
                ],
                likes: 222,
                comments:{
                    username: 'Test2 User3',
                    text: 'goood!'
                }
            }
        ]
    }
  },
    methods: {
        openModal(post) {
          this.selectedPost = post;
          this.dialog = true;
        }
    }
}
</script>

<style scoped>

</style>
