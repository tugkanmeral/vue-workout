<script setup>
import { ref } from 'vue';
import { store } from '../store';

const title = ref('Home')
</script>

<template>
    <h3 class="page-title">{{ title }}</h3>
    <button @click="store.counter.increment">Store count increment</button>
    <button @click="store.counter.decrement">Store count decrement</button>
</template>