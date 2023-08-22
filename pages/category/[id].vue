<template>
    <div class="container mx-auto mt-8">
        <h1 class="text-2xl font-semibold text-center mb-4">Category Details {{ categoryId }}</h1>
        <div class="flex flex-wrap gap-4">
            <div v-for="food in foods" :key="food.id" class="bg-white p-4 rounded shadow">
                <NuxtLink :to="`/food/${food.id}`">
                    <nuxt-img :src="food.imageUrl" :alt="food.name" class="mb-2" />
                    <h2 class="text-lg text-center font-medium">{{ food.name }}</h2>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
  
<script setup>

const route = useRoute();
const categoryId = route.params.id;

const foods = ref([
    { id: 1, name: 'Food 1', imageUrl: 'cat-1.jpg' },
    { id: 2, name: 'Food 2', imageUrl: 'cat-2.jpg' },
    { id: 3, name: 'Food 3', imageUrl: 'cat-3.jpg' },
])
</script>
  