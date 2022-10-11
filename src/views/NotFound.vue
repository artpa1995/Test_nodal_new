<template>
  <div>
    <Header head_text="not_found" content_text="" page=""/>
    <h1>page not found</h1>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Header, Footer
  },
  data() {
    return {}
  }
}
</script>

<style>

</style>