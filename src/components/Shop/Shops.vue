<template>
  <PageHeader/>
  <div class="home">
    <ProductDescriptionDrawer
    :product = "product"
    :active="active.product_drawer"
    v-on:close-product-drawer="closeProductDrawer()"
    />

    <div class="products-cards-container">
      <ProductsSummaryCard
      v-for="product in items"
      :key="product.id"
      :product="product"
      v-on:view-product="viewProduct($event)"/>
    </div>
  </div>
  
    <!-- <body class="p-3 m-1 border-1 bd-example bd-example-row"> 

<div class="container">
<div class="row">
<div class="col-6 col-sm-3" style="padding-left:110px">
<div class="card" style="width: 18rem;">
<svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>

<div class="card-body">
  <h5 class="card-title">Negocio 1</h5>
  <p class="card-text">This is a general description</p>
  <a href="#" class="btn btn-warning">Leer más</a>
</div>
</div>

  </div>
  <div class="col-6 col-sm-3" style="padding-left:120px">
  <div class="card" style="width: 18rem;">
  <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
  
  <div class="card-body">
    <h5 class="card-title">Negocio 2</h5>
    <p class="card-text">This is a general description</p>
    <a href="#" class="btn btn-warning">Leer más</a>
  </div>
</div>
  </div>

  <div class="col-6 col-sm-3" style="padding-left:130px">
  <div class="card" style="width: 18rem;">
  <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
  
  <div class="card-body">
    <h5 class="card-title">Negocio 3</h5>
    <p class="card-text">This is a general description</p>
    <a href="#" class="btn btn-warning">Leer más</a>
  </div>
</div>
  </div>

  //Force next columns to break to new line
  <div class="w-100"></div>


  
  <div class="col-6 col-sm-3" style="padding-left:110px">
  <div class="card" style="width: 18rem;">
  <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
  
  <div class="card-body">
    <h5 class="card-title">Negocio 4</h5>
    <p class="card-text">This is a general description.</p>
    <a href="#" class="btn btn-warning">Leer más</a>
  </div>
</div>
  </div>

  <div class="col-6 col-sm-3" style="padding-left: 120px">
  <div class="card" style="width: 18rem;">
  <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
  
  <div class="card-body">
    <h5 class="card-title">Negocio 5</h5>
    <p class="card-text">This is a general description.</p>
    <a href="#" class="btn btn-warning">Leer más</a>
  </div>
</div>
  </div>

  <div class="col-6 col-sm-3" style="padding-left: 130px">
  <div class="card" style="width: 18rem;">
  <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
  
  <div class="card-body">
    <h5 class="card-title">Negocio 6</h5>
    <p class="card-text">This is a general description.</p>
    <a href="#" class="btn btn-warning">Leer más</a>
  </div>
</div>
  </div>
</div>
</div>

<footer class="bg-dark text-white">
    <div class="container">
        <nav class="row">
            <a href="#" class="col-3 text-reset text uppercase d-flex align-items-center">
                <p>​© 2022 Ambiente en desarrollo web Inc. All rights reserved.</p>
            </a>
            
            <ul class="col-3 list unstyled">
                <li class="font-weight-bold text-uppercase">Redes sociales</li>
                
                    <a href="#" class="text-reset">
                        <i class="fa-brands fa-facebook"></i>
                    </a>
                    <a href="#" class="text-reset">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#" class="text-reset">
                        <i class="fa-brands fa-twitter"></i>
                    </a>
                
            </ul>
        </nav>
        
    </div>
</footer>

    </body> -->
</template>

<script>
  import PageHeader from "../Landing/pageHeader.vue";
  import items from '../../data/items'
  import ProductsSummaryCard from './ProductsSummaryCard.vue'
  import ProductDescriptionDrawer from './ProductDescriptionDrawer.vue'
  export default {
    name: 'Shops',
    components: {
    PageHeader,
    ProductsSummaryCard,
    ProductDescriptionDrawer
},
    data () {
      return {
        items: items,
        product: null,
        active: {
          product_drawer: false
        }
      }
    },
    methods: {
      viewProduct(product) {
        this.product = product
        this.active.product_drawer = true
        // console.log(product)
      },

      closeProductDrawer() {
        this.active.product_drawer = false
      }
        
      }
    }
  
</script>

<style lang="scss">
  .product-cards-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>