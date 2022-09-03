<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Tienda</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto ">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Inicia</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Registrate</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Tiendas</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Comidas rápidas</a></li>
                            <li><a class="dropdown-item" href="#">Farmacias</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><img class="carrito" src="https://cdn-icons-png.flaticon.com/512/107/107831.png" ></a>
                        </li>
                    </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
        </nav>
    </header>
    <body class="m- row justify-content-center" >
    
    <div class="col-auto bg-secondary p-5 text-center">
        <h1 class="text-warning">Inicia sesión</h1>
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

      <button type="button" class="btn btn-warning">Registrate</button>
    </div>
</body>
</template>

<script>
export default {
    setup() {
        
    },
}
</script>

<style scoped>

</style>