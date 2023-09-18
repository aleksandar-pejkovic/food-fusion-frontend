<template>
    <div class="p-4">
        <h2 class="text-2xl font-semibold mb-4">Korpa</h2>
        <ul>
            <li v-for="(item, index) in items" :key="index" class="mb-4 border-b pb-2">
                <div class="flex justify-between items-center">
                    <nuxt-img :src="`data:image/jpeg;base64,${item.image}`" :alt="item.name" class="mb-2 max-h-20" />
                    <div class="font-bold">
                        {{ item.name }}
                    </div>
                    <div>
                        <button @click="decreaseQuantity(item)"
                            class="text-red-500 w-5 rounded font-bold hover:bg-gray-100">-</button>
                        {{ item.quantity }} kom.
                        <button @click="increaseQuantity(item)"
                            class="text-green-500 w-5 rounded font-bold hover:bg-gray-100">+</button>
                    </div>
                    <div class="font-semibold">
                        {{ item.total.toFixed(2) }}
                    </div>
                    <button @click="removeFromCart(item)" class="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                        Ukloni
                    </button>
                </div>
            </li>
        </ul>
        <p class="text-xl font-semibold mt-4">
            Ukupno: {{ totalAmount }} din.
        </p>
        <button @click="clearCart" class="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600">
            Poruči
        </button>
    </div>
</template>
  
  
<script setup>
import { useCartStore } from '@/stores/cart';
import { storeToRefs } from 'pinia'

const cartStore = useCartStore()

const { items } = storeToRefs(cartStore)

function decreaseQuantity(item) {
    if (item.quantity > 1) {
        cartStore.decreaseQuantity(item)
    }
}

function increaseQuantity(item) {
    if (item.quantity < 100) {
        cartStore.increaseQuantity(item)
    }
}

function removeFromCart(item) {
    cartStore.removeFromCart(item)
}

function clearCart() {
    cartStore.clearCart()
}

const totalAmount = computed(() => {
    let total = 0;
    for (const item of items.value) {
        total += item.total;
    }
    return total.toFixed(2);
});
</script>
  