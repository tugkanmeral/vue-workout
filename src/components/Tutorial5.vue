<script setup>
import { ref } from 'vue';

const isOn = ref(true)

function toggle() {
    isOn.value = !isOn.value;
}
</script>

<template>
    <button @click="toggle">Toggle</button>
    <div class="on" v-if="isOn">ON</div>
    <div class="off" v-else>OFF</div>
</template>

<style>
.on {
    background-color: green;
    color: ghostwhite;
    text-align: center;
}

.off {
    background-color: darkred;
    color: ghostwhite;
    text-align: center;
}
</style>