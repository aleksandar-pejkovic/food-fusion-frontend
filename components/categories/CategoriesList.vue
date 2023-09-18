<template>
    <div class="container mx-auto mt-8">
        <h1 class="text-2xl font-semibold text-center mb-4">Kategorije</h1>
        <div class="flex flex-wrap justify-center gap-4">
            <div v-for="(category, index) in categories" :key="index" class="bg-white p-4 rounded shadow">
                <NuxtLink :to="`/category/${category.id}`">
                    <nuxt-img :src="`data:image/jpeg;base64,${category.image}`" :alt="category.name"
                        class="mb-2 max-h-96" />
                    <h2 class="text-lg text-center font-medium">{{ category.name }}</h2>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { useBusinessStore } from '@/stores/business';

const businessStore = useBusinessStore()
const business = businessStore.getBusiness()
const baseUrl = useBaseUrl().value
const { data: categories } = await useFetch(`${baseUrl}/categories/business-id/${business.id}`)
</script>
