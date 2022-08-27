<script setup>
import { ref } from 'vue'

const titleClassName = ref('title')
</script>

<template>
    <h4 v-bind:class="titleClassName">Color of mediumspringgreen</h4>
    <h4 :class="titleClassName">Color of mediumspringgreen using shorthand</h4>
</template>

<style>
.title {
    color: mediumspringgreen
}
</style>