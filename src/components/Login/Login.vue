<template>
    <header>
      <pageHeader/>
    </header>
    
    <body class="m- row justify-content-center" >    
    <div class="col-auto bg-secondary p-5 text-center">
      <br>
      <br>
      <br>
      <br>
        <h1 class="text-warning">Inicia sesión</h1>
      <form class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Nombre de usuario</label
        >
        <input
          type="text"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          v-model="email"
        />
      </form>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Contraseña</label
        >
        <input type="password" class="form-control" id="inputPassword" v-model="password" />
      </div>

      <button type="button" class="btn btn-warning" @click="Login()">Inicia sesión</button>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      
    </div>
</body>
</template>

<script>
import PageHeader from "../Landing/pageHeader.vue";
import { mapActions, useStore } from 'vuex'
import { useRouter } from 'vue-router'
import router from "../../router/router";

export default {
  name: "LoginComponent",
  setup() {
  },
  components: { 
    PageHeader
  },
  data() {
    return {
      email: '',
      password: '',
      error: null,
      store: useStore(),
      router: useRouter()
    }
  },
  methods: {
    ...mapActions('user', {
      logIn: 'logIn'
    }),
    async Login() {
      try{

        this.logIn({
          email: this.email,
          password: this.password
        })

        await this.store.dispatch('user/logIn', {
          email: this.email,
          password: this.password
        })
        router.push('/')
      }
      catch (err) {
        this.error = err.message
      }
    }
  }
  
};
</script>

<style scoped>

</style>