<template>
  <header>
    <PageHeader />
  </header>

  <body class="m-0 p-0">
    <div class="m-0 px-5 mx-5">
      <p class="text-center h1 fw-bold mb-5 mt-4">Registro</p>

      <form>
        <div class="d-flex flex-row align-items-center mb-4">
          <div class="form-outline flex-fill mb-0">
            <input type="text" id="form3Example1c" class="form-control" placeholder="Nombre" v-model="nombre">
          </div>
        </div>

        <div class="d-flex flex-row align-items-center mb-4">
          <div class="form-outline flex-fill mb-0">
            <input type="email" id="form3Example3c" class="form-control" placeholder="Correo" v-model="correo">
          </div>
        </div>

        <div class="d-flex flex-row align-items-center mb-4">
          <div class="form-outline flex-fill mb-0">
            <input type="password" id="form3Example4c" class="form-control" placeholder="Contraseña" v-model="contrasena">
          </div>
        </div>

        <div class="d-flex flex-row align-items-center mb-4">
          <div class="form-outline flex-fill mb-0">
            <input type="password" id="form3Example4cd" class="form-control" placeholder="Repite tu contraseña" v-model="againContrasena">
          </div>
        </div>

        <div class="form-check d-flex justify-content-center mb-5">
          <input class="form-check-input me-2" type="checkbox" v-model="terminosCondiciones" id="form2Example3c">
          <label class="form-check-label" for="form2Example3">
            Acepto los <a href="#!">términos y condiciones.</a>
          </label>
        </div>

        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
          <button type="button" class="btn btn-primary btn-lg" @click="iniciarRegistro">Registrarse</button>
        </div>
      </form>
    </div>
  </body>
</template>

<script>
import PageHeader from "../Landing/pageHeader.vue";
import { useRouter } from "vue-router";


export default {
  data() {
    return {
      nombre: "",
      correo: "",
      contrasena: "",
      againContrasena: "",
      terminosCondiciones: false,
      router: useRouter()
    }
  },
  components: { 
    PageHeader 
  },
  methods: {
    iniciarRegistro: function () {

      if (this.nombre && this.correo && this.contrasena
        && this.againContrasena) {
          if (this.terminosCondiciones) {
            if (this.contrasena == this.againContrasena) {
              let dataRegister = {
                name: this.nombre,
                email: this.correo,
                password: this.contrasena
              };

              fetch("http://localhost:4000/api/auth/new", {
                method: "post",
                mode: "cors",
                headers: {
                  'Content-Type': 'application/json'          
                },
                body: JSON.stringify(dataRegister),
              })
                .then(res => res.json())
                .then(data => {
                  console.log(data);
                  alert("¡Usuario registrado con éxito!");
                  this.router.push('/login');
                })
            } else {
              alert("Las contraseñas no son iguales...");
            }
          } else {
            alert("Por favor acepte los términos y condiciones...");
          }
        } else {
          alert("Por favor complete todos para poder registrarse...");
        }

      console.log("Nombre: " + this.nombre);
      console.log("Correo: " + this.correo);
      console.log("Contraseña: " + this.contrasena);
      console.log("Again contraseña: " + this.againContrasena);
      console.log("Términos y condiciones: " + this.terminosCondiciones);
    }
  }
}
</script>

<style scoped>

</style>