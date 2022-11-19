<template>
    <PageHeader></PageHeader>
    <section class="card-area pb-5">
   <div class="container">
      <div class="row justify-content-center">
         <div class="col-lg-4 col-md-7 col-sm-9">
            <div class="single-card card-style-one">
               <div class="card-image">
                  <img src="https://i.pinimg.com/originals/28/f1/a9/28f1a972e13e4281b5273891ead173eb.jpg" alt="Image" />
               </div>
               <div class="card-content">
                  <h4 class="card-title">
                     <a href="javascript:void(0)">Tienda 1</a>
                  </h4>
                  <p class="text">
                    Descripción del negocio, ea ea ea
                  </p>
               </div>
            </div>
            <!-- single-card -->
         </div>
         <!-- col -->
         <div class="col-lg-4 col-md-7 col-sm-9">
            <div class="single-card card-style-one">
               <div class="card-image">
                  <img src="https://img.freepik.com/vector-premium/diseno-logotipo-tienda-organica-inspirado_18099-270.jpg?w=2000" alt="Image" />
               </div>
               <div class="card-content">
                  <h4 class="card-title">
                     <a href="javascript:void(0)">Tienda 2</a>
                  </h4>
                  <p class="text">
                    Descripción del negocio, ea ea ea
                  </p>
               </div>
            </div>
            <!-- single-card -->
         </div>
         <!-- col -->
         <div class="col-lg-4 col-md-7 col-sm-9">
            <div class="single-card card-style-one">
               <div class="card-image">
                  <img src="https://images.vexels.com/media/users/3/214981/isolated/preview/7b8e4754b7104c5612588d7970273f36-icono-de-trazo-de-tienda.png" alt="Image" />
               </div>
               <div class="card-content">
                  <h4 class="card-title">
                     <a href="javascript:void(0)">Tienda 3</a>
                  </h4>
                  <p class="text">
                     Descripción del negocio, ea ea ea
                  </p>
               </div>
            </div>
            <!-- single-card -->
         </div>
         <!-- col -->
      </div>
      <!-- row -->
      <div class="container">
      <div class="row justify-content-center">
         <div class="col-lg-4 col-md-7 col-sm-9">
            <div class="single-card card-style-one">
               <div class="card-image">
                  <img src="https://i.pinimg.com/originals/28/f1/a9/28f1a972e13e4281b5273891ead173eb.jpg" alt="Image" />
               </div>
               <div class="card-content">
                  <h4 class="card-title">
                     <a href="javascript:void(0)">Tienda 1</a>
                  </h4>
                  <p class="text">
                    Descripción del negocio, ea ea ea
                  </p>
               </div>
            </div>
            <!-- single-card -->
         </div>
         <!-- col -->
         <div class="col-lg-4 col-md-7 col-sm-9">
            <div class="single-card card-style-one">
               <div class="card-image">
                  <img src="https://img.freepik.com/vector-premium/diseno-logotipo-tienda-organica-inspirado_18099-270.jpg?w=2000" alt="Image" />
               </div>
               <div class="card-content">
                  <h4 class="card-title">
                     <a href="javascript:void(0)">Tienda 2</a>
                  </h4>
                  <p class="text">
                    Descripción del negocio, ea ea ea
                  </p>
               </div>
            </div>
            <!-- single-card -->
         </div>
         <!-- col -->
         <div class="col-lg-4 col-md-7 col-sm-9">
            <div class="single-card card-style-one">
               <div class="card-image">
                  <img src="https://images.vexels.com/media/users/3/214981/isolated/preview/7b8e4754b7104c5612588d7970273f36-icono-de-trazo-de-tienda.png" alt="Image" />
               </div>
               <div class="card-content">
                  <h4 class="card-title">
                     <a href="javascript:void(0)">Tienda 3</a>
                  </h4>
                  <p class="text">
                     Descripción del negocio, ea ea ea
                  </p>
               </div>
            </div>
            <!-- single-card -->
         </div>
         <!-- col -->
      </div>
      <!-- row -->
      
   </div>
   </div>
   <!-- container -->
</section>
<!--====== CARD PART ENDS ======-->
</template>

<script>
import PageHeader from "../Landing/pageHeader.vue";

export default {
    name: 'ShopsCards',
    components: {
    PageHeader
    },
}

</script>

<style scoped>
.single-card {
  box-shadow: var(--shadow-1);
  border-radius: 8px;
  overflow: hidden;
  margin-top: 30px;
  -webkit-transition: all 0.3s ease-out 0s;
  -moz-transition: all 0.3s ease-out 0s;
  -ms-transition: all 0.3s ease-out 0s;
  -o-transition: all 0.3s ease-out 0s;
  transition: all 0.3s ease-out 0s;
}
.single-card:hover {
  box-shadow: var(--shadow-4);
}
.single-card .card-image img {
  width: 100%;
  height: 100%;
}
.single-card .card-content {
  padding: 16px;
}
.single-card .card-content .card-title {
  margin-bottom: 0;
}
.single-card .card-content .card-title a {
  color: var(--black);
  -webkit-transition: all 0.3s ease-out 0s;
  -moz-transition: all 0.3s ease-out 0s;
  -ms-transition: all 0.3s ease-out 0s;
  -o-transition: all 0.3s ease-out 0s;
  transition: all 0.3s ease-out 0s;
}
.single-card .card-content .card-title a:hover {
  color: var(--primary);
}
.single-card .card-content .text {
  color: var(--dark-3);
  margin-top: 8px;
}
</style>