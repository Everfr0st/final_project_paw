<template>
    <header>
        <PageHeader/>
    </header>
 <body class="m- row justify-content-center">
    <div class="col-auto bg-secondary p-5 text-center">
      <h1 class="text-warning">Registrate</h1>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Email address</label
        >
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Nombre(s) y apellidos</label
        >
        <input type="text" class="form-control" placeholder="Fulano Pérez" />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Nombre de usuario</label
        >
        <input
          type="text"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Contraseña</label
        >
        <input type="password" class="form-control" id="inputPassword" />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Teléfono</label
        >
        <input type="number" class="form-control" min="0" max="9999999999" />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Ubicación</label
        >
        <input type="text" class="form-control" />
      </div>
      <button type="button" class="btn btn-warning">Registrate</button>
    </div>
</body> 
</template>

<script>
import PageHeader from "../Landing/pageHeader.vue";
export default {
    setup() {
    },
    components: { PageHeader }
}
</script>

<style scoped>

</style>