<template>
    <div>
        <Food :food="food" />
    </div>
</template>

<script setup>
const route = useRoute();
const foodId = route.params.id;

const baseUrl = useBaseUrl().value
const { data: food } = await useFetch(`${baseUrl}/foods/${foodId}`)
</script>
