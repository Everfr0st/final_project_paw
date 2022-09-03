<template>
  <shops/>
</template>


<script>

import Home from './components/Landing/Home.vue';
import Login from './components/Login/Login.vue';
import Register from './components/Register/Register.vue';
import Shops from './components/Landing/Shops.vue'

export default {
  name: 'App',
  components: {
    Home,
    Login,
    Register,
    Shops
  }
}
</script>

