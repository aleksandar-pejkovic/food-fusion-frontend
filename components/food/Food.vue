<template>
    <div class="container mx-auto mt-8">
        <h1 class="text-2xl font-semibold text-center mb-4">{{ food.name }}</h1>
        <div class="flex flex-wrap justify-center gap-4">
            <div class="bg-white p-4 rounded shadow">
                <nuxt-img :src="`data:image/jpeg;base64,${food.image}`" :alt="food.name" class="mb-2 max-h-96" />
                <h2 class="text-lg text-center font-medium">Cena: {{ food.price }}</h2>
                <button @click="addToCart"
                    class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mx-auto my-4 block">
                    Dodaj
                </button>
            </div>
        </div>
    </div>
    <div class="mt-4">
        <h2 class="text-xl font-semibold text-center">Dodaci:</h2>
        <div class="flex flex-wrap justify-center gap-4">
            <div v-for="condiment in condiments" :key="condiment.id" class="bg-white p-4 rounded shadow">
                <label>
                    <input type="checkbox" v-model="selectedCondiments" :value="condiment.id" /> {{ condiment.name }}
                </label>
            </div>
        </div>
    </div>
</template>
  
<script setup>
const props = defineProps({
    food: Object,
    condiments: Object
});
const selectedCondiments = ref([]);
const addToCart = () => {
    console.log('Selected Condiments:', selectedCondiments.value);
};
</script>
  