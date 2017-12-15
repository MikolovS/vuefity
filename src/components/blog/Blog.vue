<template>

  <v-container fluid v-bind="{ [`grid-list-${'xs'}`]: true }">
    <v-layout row wrap>
      <v-flex
        xs12
        sm8 offset-sm2
        md4 offset-md4
        lg4 offset-lg4
        v-for="(post, i) in posts"
        :key="i"
      >
        <v-card>
          <!--<v-card-media-->
            <!--class="white&#45;&#45;text"-->
            <!--:src="post.img"-->
            <!--height="450px"-->
            <!--@click="openModal(post)"-->
          <!--&gt;-->
          <!--</v-card-media>-->
          <img width="100%" :src="post.img" @click="openModal(post)"/>
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

    <v-layout v-if="dialog" row wrap>

        <v-dialog
          v-model="dialog"
          transition="dialog-fade-transition"
          :fullscreen="$vuetify.breakpoint.xs"
          maxWidth="60%"
        >
          <v-card>
            <img style="width: 100% !important; max-height: inherit" :src="selectedPost.img"/>
            <v-btn icon>
              <v-icon>favorite</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>bookmark</v-icon>
            </v-btn>
            <v-btn icon @click="dialog = false">
              <v-icon>share</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-card-title>
              <div>
                <span class="grey--text">{{selectedPost.title}}</span><br>
                <span v-for="(hashtag, n) in selectedPost.hashtags" :key="n">{{hashtag}}</span>
              </div>
            </v-card-title>
          </v-card>

        </v-dialog>

    </v-layout>
  </v-container>

</template>

<script>

import VCard from "vuetify/es5/components/VCard/VCard";
import VCardMedia from "vuetify/es5/components/VCard/VCardMedia";
import VCardTitle from "vuetify/es5/components/VCard/VCardTitle";
import VDialog from "vuetify/es5/components/VDialog/VDialog";

export default {
    components: {
        VCardTitle,
        VCardMedia,
        VCard,
        VDialog
    },
    name: 'Blog',
    computed: {

    },
  data () {
    return {
        dialog: false,
        selectedPost: {
            title: '',
            img: '',
            hashtags: [
                '',
                '',
                '',
            ],
            likes: 0,
            comments:{
                username: '',
                text: ''
            }
        },
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
            },
            {
                title: 'Test3 title3',
                img: 'src/assets/cherep.jpg',
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
