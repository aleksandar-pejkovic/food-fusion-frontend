<template>
    <div>
        <Food :food="food" :condiments="condiments" />
    </div>
</template>

<script setup>
const route = useRoute();
const foodId = route.params.id;

const baseUrl = useBaseUrl().value
const { data: food } = await useFetch(`${baseUrl}/foods/${foodId}`, { method: 'GET' })
const { data: condiments } = await useFetch(`${baseUrl}/condiments/food-id/${foodId}`)
</script>
