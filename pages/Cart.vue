<template>
    <div>
        <h2>Korpa</h2>
        <ul>
            <li v-for="(item, index) in items" :key="index">
                {{ item.name }} - Quantity: {{ item.quantity }} - Price: ${{ item.price }} - Total: ${{ item.total }}
                <button @click="removeFromCart(item)">Remove</button>
            </li>
        </ul>
        <p>Total: ${{ }}</p>
        <button @click="clearCart">Clear Cart</button>
    </div>
</template>
  
<script setup>
import { useCartStore } from '@/stores/cart';
import { storeToRefs } from 'pinia'

const cartStore = useCartStore()

const { items } = storeToRefs(cartStore)

function removeFromCart(item) {
    cartStore.removeFromCart(item)
}
function clearCart() {
    cartStore.clearCart()
}

</script>
  