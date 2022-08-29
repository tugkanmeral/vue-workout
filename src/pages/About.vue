<script setup>
import { ref } from 'vue';
import { store } from '../store';

const title = ref('About')
const clientIp = ref('')

fetch('https://api.ipify.org?format=json')
    .then(x => x.json())
    .then(({ ip }) => {
        clientIp.value = ip;
    });
</script>

<template>
    <h3 class="page-title">{{ title }}</h3>
    <span>store.counter.count : {{ store.counter.count }}</span>
    <span>Yout IP: {{ clientIp }}</span>
</template>