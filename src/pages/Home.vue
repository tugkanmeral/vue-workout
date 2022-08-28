<script setup>
import { ref } from 'vue';
import { store } from '../store';

const title = ref('Home')
</script>

<template>
    <h3>{{ title }}</h3>
    <button @click="store.counter.increment">Store count increment</button>
</template>