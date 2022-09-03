<template>

    <body class="body_home">
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

<div class="masterhome" style="background-image:url('./fondo.png')">
        <div class="color-overlay d-flex justify-content-center align-items-center">
            <section class="home">
                <div class="container">
                    <div class="left">
                    <h2 class="left_h2">TU RESTAURANTE FAVORITO EN CALI A LA HORA QUE QUIERAS</h2>
                    <p class="parrafo_left">Ordena cuando y desde donde quieras</p>
                    </div>
                        <div class="right">
                    </div>
                </div>
            </section>
        </div>
    </div>


    </body>

    <footer>

    </footer>
</template>

<script>
export default {
    setup() {
        
    },
}
</script>

<style scoped>

</style>