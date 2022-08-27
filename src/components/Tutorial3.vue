<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
    count.value++
}

function decrement() {
    count.value--
}

</script>

<template>
    <button v-on:click="increment">Count++</button>
    <button @click="decrement">Count-- (shorthand syntax)</button>
    <p>{{ count }}</p>
</template>

<style>
</style>