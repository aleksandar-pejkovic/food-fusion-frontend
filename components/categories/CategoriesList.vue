<template>
    <div class="container mx-auto mt-8">
        <h1 class="text-2xl font-semibold text-center mb-4">Kategorije</h1>
        <div class="flex flex-wrap justify-center gap-4">
            <div v-for="(category, index) in categories" :key="index" class="bg-white p-4 rounded shadow">
                <NuxtLink :to="`/category/${category.id}`">
                    <nuxt-img :src="category.imageUrl" :alt="category.name" class="mb-2" />
                    <h2 class="text-lg text-center font-medium">{{ category.name }}</h2>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
  
<script setup>
const useUrl = useBaseUrl()
const { data: categories } = await useFetch('/api/categories', {
    transform: (_categories) => _categories.data
})
console.log(toRaw(categories.value))
</script>
  