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
                        {{ item.quantity }}
                        <button @click="increaseQuantity(item)"
                            class="text-green-500 w-5 rounded font-bold hover:bg-gray-100">+</button>
                    </div>
                </div>
                <div class="flex justify-between">
                    <button @click="removeFromCart(item)"
                        class="bg-red-500 text-white m-2 py-1 rounded w-20 hover:bg-red-600">
                        Ukloni
                    </button>
                    <div class="font-semibold m-2 text-xl">
                        {{ item.total.toFixed(2) }} din.
                    </div>
                </div>

            </li>
        </ul>
        <p class="text-2xl font-semibold mt-4">
            Ukupno: {{ totalAmount }} din.
        </p>
        <button v-if="items.length > 0" @click="placeOrder"
            class="bg-blue-500 text-white py-2 rounded mt-4 w-20 hover:bg-blue-600">
            Poruči
        </button>

        <p class="mt-4 text-green-500 rounded font-bold" v-if="orderMessage">{{ orderMessage }}</p>
    </div>
</template>
  
  
<script setup>
import { useCartStore } from '@/stores/cart'
import { useBusinessStore } from '@/stores/business'
import { storeToRefs } from 'pinia'

const cartStore = useCartStore()
const businessStore = useBusinessStore()

const orderMessage = ref('')

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

async function placeOrder() {
    try {
        const business = businessStore.getBusiness();
        const baseUrl = useBaseUrl().value;

        const orderResponse = await useFetch(`${baseUrl}/orders`, {
            method: 'POST',
            params: { businessId: business.id }
        });

        if (orderResponse.data) {
            const order = orderResponse.data;
            items.value.forEach((item) => (item.orderId = order.value.id));

            const itemsResponse = await useFetch(`${baseUrl}/items`, {
                method: 'POST',
                body: JSON.stringify(items.value),
            });

            if (itemsResponse.data) {
                console.log('Order placed successfully');
                orderMessage.value = `Broj porudžbine: #${order.value.orderNumber}. Status: ${order.value.status}`
                clearCart()
            } else {
                console.error('Failed to create items');
            }
        } else {
            console.error('Failed to create order');
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

const totalAmount = computed(() => {
    let total = 0;
    for (const item of items.value) {
        total += item.total;
    }
    return total.toFixed(2);
});
</script>
  