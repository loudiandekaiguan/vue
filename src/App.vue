<template>
  <div id="app">
    <Header></Header>
    <RouterView></RouterView>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import { RouterLink, RouterView } from 'vue-router';
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    RouterLink,
    RouterView
  },
  mounted(){
    this.$store.dispatch('categoryList')
  }
}
</script>

<style>

</style>
