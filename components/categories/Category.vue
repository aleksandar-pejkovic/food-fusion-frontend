<template>
    <div class="container mx-auto mt-8">
        <h1 class="text-2xl font-semibold text-center mb-4">{{ category.name }}</h1>
        <div class="flex flex-wrap justify-center gap-4">
            <div v-for="food in foods" :key="food.id" class="bg-white p-4 rounded shadow">
                <NuxtLink :to="`/food/${food.id}`">
                    <nuxt-img :src="`data:image/jpeg;base64,${food.image}`" :alt="food.name" class="mb-2 max-h-96" />
                    <h2 class="text-lg text-center font-medium">{{ food.name }}</h2>
                    <h2 class="text-lg text-center font-medium">Cena: {{ food.price }}</h2>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    category: Object,
    foods: Object
});
</script>
