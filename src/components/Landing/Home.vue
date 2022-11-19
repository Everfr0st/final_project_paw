<template>
    <pageHeader/>
    <body class="body_home">

        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="./burguer.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Texto genial que hace comprar a la gente :D</h5>
                        <p>ALGOOOOO</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="./vegetables-gcc1d13691_1280.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Ordena cuando y desde donde quieras</h5>
                        <p>ALGOOOOO</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="./food-g8b0f6d280_1280.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>TU RESTAURANTE FAVORITO EN CALI A LA HORA QUE QUIERAS</h5>
                        <p>ALGOOOOO</p>
                    </div>
                </div>
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>

            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </body>

    <footer>
        <Footer/>
    </footer>
</template>

<script>
import PageHeader from "./pageHeader.vue";
import Footer from "../Shared/Footer.vue";
export default {
    setup() {
    },
    components: {
    PageHeader,
    Footer
}
}
</script>

<style scoped>
h5{
    color: yellow;
}
.carousel-item img {
    top: 0;
    left: 0;
    min-height: 300px;
    max-height: 576px;
}
</style>