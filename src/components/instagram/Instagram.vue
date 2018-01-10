<template>

  <v-layout>
    <v-flex xs12>
      <v-card>
        <v-container fluid v-bind="{ [`grid-list-xs`]: false }">
          <v-layout row wrap>
            <v-flex
                    xs4
                    v-for="(post,i) in posts"
                    :key="i"
            >
              <v-card flat tile>
                <v-card-media
                        :src="post.medias[0][0].url"
                        height="250px"
                        width="250px"
                >
                </v-card-media>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>

</template>

<script>
    import Axios from '@/axiosInstance';
    import VCard from "vuetify/es5/components/VCard/VCard";
    import VCardMedia from "vuetify/es5/components/VCard/VCardMedia";
    import VCardTitle from "vuetify/es5/components/VCard/VCardTitle";
    import VDialog from "vuetify/es5/components/VDialog/VDialog";
    import VCarousel from "vuetify/es5/components/VCarousel/VCarousel";
    import VCarouselItem from "vuetify/es5/components/VCarousel/VCarouselItem";

    import {instagramConstants} from '@/constants';

    export default {
        components: {
            VCarouselItem,
            VCarousel,
            VCardTitle,
            VCardMedia,
            VCard,
            VDialog
        },
        name: 'Blog',
        computed: {

        },
        created() {
            let that = this;
            that.getFeed();
        },
        data () {
            return {
                page: 1,
                on_page: 1,
                PHOTO: 1,
                ALBUM: 8,
                VIDEO: 2,
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
                posts: []
            }
        },
        methods: {
            openModal(post) {
                this.selectedPost = post;
                this.dialog = true;
            },
            getFeed() {
                let that = this;
                let params = {
                    page: this.page,
                    on_page: this.on_page,
                };
                Axios.get(instagramConstants.feed, {
                    params: params
                })
                    .then((res)=> {
//                        console.log(res.data[0].medias);
                        that.posts = res.data;
                        console.log(that.posts[0].medias[0][0].url);
                    })
                    .catch((error)=> {
                        console.log('error');
                    })
            }
        }
    }
</script>

<style scoped>
 .carousel {
  overflow: inherit !important;
   height: auto !important;
 }
</style>
