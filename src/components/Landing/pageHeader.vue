<template>
    <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Tienda</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto ">
                        <li class="nav-item">
                            <router-link to="/login" class="nav-link">Inicia</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/Register" class="nav-link">Registrate</router-link>
                            
                        </li>
                        <li class="nav-item">
                            <router-link to="/Shops" class="nav-link">Tiendas</router-link>
                            
                        </li>
                        <li class="nav-item">
                            <router-link to="/chat" class="nav-link">Chat</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/ShopCart" class="nav-link">
                                <img class="carrito" src="https://cdn-icons-png.flaticon.com/512/107/107831.png" >
                            </router-link>
                        </li>
                    </ul>



                    <nav class="navbar navbar-expand-lg bg-light"></nav>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-dark" type="submit">Search</button>
                    </form>
                </div>
            </div>
    </nav>
</template>

<script>

</script>

<style>

</style>