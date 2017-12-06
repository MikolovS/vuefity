<template>
    <div>
      <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              to="/qwerty"
      >
        Get Started
      </v-btn>
    </div>
</template>

<script>

export default {
    name: 'Qwerty',
  data () {
        console.log(this.$route.path);
    return {
    }
  }
}
</script>

<style scoped>

</style>
