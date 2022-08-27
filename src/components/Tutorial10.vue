<script setup>
const props = defineProps({
    message: String
})
</script>

<template>
    <span>Property sent by parent : <span class="property">{{ props.message }}</span></span>
</template>

<style>
.property {
    color: darkgreen;
    font-weight: bold;
}
</style>