<template>
    <div>
        <Category :foodList="foodList" :category="category" />
    </div>
</template>
  
<script setup>
const route = useRoute();
const categoryId = route.params.id;

const baseUrl = useBaseUrl().value
const { data: foodList } = await useFetch(`${baseUrl}/foods/categoryId/${categoryId}`)
const { data: category } = await useFetch(`${baseUrl}/categories/${categoryId}`, { method: 'GET' })
</script>
  