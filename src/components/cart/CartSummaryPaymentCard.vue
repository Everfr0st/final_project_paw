<template>
  <div class="cart-item-card">
    <h3>Carrito total: ${{ cart_total.toFixed(2) }}</h3>

    <button class="view-product-button">Paga con tarjeta</button>

  </div>
</template>

<script>
export default {
    props: ['products'],
    computed: {
        cart_total(){          
            return this.$store.getters['cart/cartTotal']
        }
    }
}
</script>

<style lang="scss" scoped>
 .view-product-button{
    padding: 10px;
            background-color: rgb(216, 206, 60);
            border: none;
            color: white;
            font-weight: bold;  
            font-size: 1.15rem;
            border-radius: 5px;
            cursor: pointer;
 }
</style>
