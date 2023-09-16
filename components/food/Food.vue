<template>
    <div class="container mx-auto mt-8">
        <h1 class="text-2xl font-semibold text-center mb-4">{{ food.name }}</h1>
        <div class="flex flex-wrap justify-center gap-4">
            <div class="bg-white p-4 rounded shadow">
                <nuxt-img :src="`data:image/jpeg;base64,${food.image}`" :alt="food.name" class="mb-2 max-h-96" />
                <h2 class="text-lg text-center font-medium m-5">{{ food.price.toFixed(2) }} din.</h2>
                <div class="flex flex-row justify-center">
                    <button @click="decrementQuantity" class="bg-gray-400 text-white px-2 py-2 rounded hover:bg-gray-600">
                        -
                    </button>
                    <input type="number" id="quantity" name="quantity" v-model="quantity" min="1" max="10"
                        class="text-center m-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    <button @click="incrementQuantity" class="bg-gray-400 text-white px-2 py-2 rounded-r hover:bg-gray-600">
                        +
                    </button>
                    <button @click="addToCart" class="ml-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Dodaj
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="mt-4">
        <h2 class="text-xl font-semibold text-center">Dodaci:</h2>
        <div class="flex flex-wrap justify-center gap-4">
            <div v-for="condiment in condiments" :key="condiment.id" class="bg-white p-4 rounded shadow">
                <label>
                    <input type="checkbox" v-model="condimentIdList" :value="condiment.id" /> {{ condiment.name }}
                </label>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { useCartStore } from '@/stores/cart';

const cartStore = useCartStore()
const router = useRouter()

const props = defineProps({
    food: Object,
    condiments: Object
});

const condimentIdList = ref([]);
const quantity = ref(1);

function decrementQuantity() {
    if (quantity.value > 1) {
        quantity.value--
    }
}

function incrementQuantity() {
    if (quantity.value < 10) {
        quantity.value++
    }
}

function addToCart() {
    const item = {
        name: props.food?.name,
        price: props.food?.price,
        quantity: quantity.value,
        total: props.food?.price * quantity.value,
        foodId: parseInt(props.food?.id),
        condimentIdList: condimentIdList.value ?? [],
        image: props.food?.image
    }
    cartStore.addToCart(item)
    router.push('/cart')
}
</script>
  