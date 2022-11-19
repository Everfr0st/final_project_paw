<template>
  <RouterView/>
</template>


<script>
// import {onBeforeMount} from 'vue'
// // import firebase from 'firebase'
// import router from './router/router'

// export default {
//   setup() {
//     onBeforeMount(() => {
//       firebase.auth().onAuthStateChanged((user) => {
//         if (!user){
//           router.replace('/login');
//         } else if (route.path == "/login" || route.path == "/register"){
//           router.replace('/');
//         }
//       })
//     })
//   },
//   mounted() {
//     this.$store.commit('updateCartFromLocalStorage')
//   }
// }
</script>

<style scoped>
  .router-link-active {
    /**/
  }
</style>

