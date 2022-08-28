<script setup>
import { ref } from 'vue';
import { store } from '../store';

const title = ref('About')
</script>

<template>
    <h3>{{ title }}</h3>
    <span>store.counter.count : {{ store.counter.count }}</span>
</template>