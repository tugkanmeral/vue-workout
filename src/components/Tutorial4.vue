<script setup>
import { ref } from 'vue';

const text1 = ref('')
const text2 = ref('')

function onInput(e) {
    text1.value = e.target.value
}
</script>

<template>
    <h4>Using event handler</h4>
    <input :value="text1" @input="onInput" placeholder="type here...">
    <p>text 1 : {{ text1 }}</p>
    <h4>Using v-model</h4>
    <input v-model="text2" placeholder="type here..." />
    <p>text 2 : {{ text2 }}</p>
</template>