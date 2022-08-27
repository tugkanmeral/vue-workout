<script setup>
import { onMounted, ref } from 'vue';

const p = ref(null)

onMounted(() => {
    p.value.textContent = 'Hello there! I\'m mounted'
})
</script>

<template>
    <p ref="p">Hello there!</p>
</template>