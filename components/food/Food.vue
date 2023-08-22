<template>
    <div>
        <h1>{{ food.name }}</h1>
    </div>
</template>
  
<script setup>

const props = defineProps({
    food: Object
});
</script>
  