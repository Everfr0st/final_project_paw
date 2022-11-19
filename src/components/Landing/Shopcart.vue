<template>
    <PageHeader/>
    <div>
        <h1>Tu carrito de compras</h1>

        <CartItemCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        />

        <CartSummaryPaymentCard
        :products="products"
        />

    </div>
</template>

<script>
    import CartItemCard from '../cart/CartItemCard.vue'
    import PageHeader from "./pageHeader.vue";
    import CartSummaryPaymentCard from '../cart/CartSummaryPaymentCard.vue'
    export default {
        components: {
    PageHeader,
    CartItemCard,
    CartSummaryPaymentCard
},
        computed: {
            product() {
                return this.$store.getters['cart/cartItems']
            }
        }
    }
    </script>

<style scoped>

</style>