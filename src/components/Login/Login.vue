<template>
  <header>
    <pageHeader />
  </header>

  <body>
    <div class="bg-white mx-5 mt-5">
      <section class="w-100 p-4 d-flex justify-content-center pb-4">
        <form style="width: 22rem;">
          <!-- Email input -->
          <div class="form-outline mb-4">
            <input type="email" id="form2Example1" class="form-control" placeholder="Email address" v-model="email">
            <div class="form-notch">
              <div class="form-notch-leading" style="width: 9px;"></div>
              <div class="form-notch-middle" style="width: 88.8px;"></div>
              <div class="form-notch-trailing"></div>
            </div>
          </div>

          <!-- Password input -->
          <div class="form-outline mb-4">
            <input type="password" id="form2Example2" class="form-control" placeholder="Password" v-model="password" />
            <div class="form-notch">
              <div class="form-notch-leading" style="width: 9px;"></div>
              <div class="form-notch-middle" style="width: 64px;"></div>
              <div class="form-notch-trailing"></div>
            </div>
          </div>

          <!-- 2 column grid layout for inline styling -->
          <div class="row mb-4">
            <div class="col d-flex justify-content-center">
              <!-- Checkbox -->
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked="">
                <label class="form-check-label" for="form2Example31"> Remember me </label>
              </div>
            </div>

            <div class="col">
              <!-- Simple link -->
              <a href="#!">Forgot password?</a>
            </div>
          </div>

          <!-- Submit button -->
          <button type="button" class="btn btn-primary btn-block mb-4" @click="Login()">Sign in</button>

          <!-- Register buttons -->
          <div class="text-center">
            <p>Not a member? <a href="#!">Register</a></p>
          </div>
        </form>
      </section>
    </div>
  </body>
</template>

<script>
import PageHeader from "../Landing/pageHeader.vue";
import { mapActions, useStore } from 'vuex'
import { useRouter } from 'vue-router';
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
      store: useStore(),
      router: useRouter()
    }
  },
  methods: {
    async Login() {
      try {
        
        let dataLogIn = {
          "email": this.email,
          "password": this.password
        };

        console.log(dataLogIn);

        await fetch("http://localhost:4000/api/auth/", {          
          method: "post",
          mode: "cors",
          headers: {
            'Content-Type': 'application/json'          
          },
          body: JSON.stringify(dataLogIn),
        })
          .then(res => {
            res.json()
              .then(data => {
                console.log(data);
                if (data.usuario) {
                  alert("Inicio de sesión exitoso!");
                  let usuario = data['usuario'];
                  let nombre = usuario['name'];
                  document.cookie = `name=${nombre}`;
                  this.router.push('/chat');
                } else {
                  alert(data["msg"]);
                }
              })
          })
          .catch(err => {
            alert("Ocurrió un error al intentar iniciar sesión...");
            console.log(err);
          })
      }
      catch (err) {
        alert("Ocurrió un error al intentar iniciar sesión...");
        console.log(err);
      }
    }
  }

};
</script>

<style scoped>

</style>