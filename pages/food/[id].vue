<template>
    <div>
        <Food :food="food" />
    </div>
</template>

<script setup>

const route = useRoute();
const foodId = route.params.id;

const food = ref(
    { id: 1, name: 'Food 1', imageUrl: 'cat-1.jpg' },
)
</script>
