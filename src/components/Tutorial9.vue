<script setup>
import { ref, watch } from 'vue';

const id = ref(1)
const todoData = ref(null)

async function fetchData() {
    todoData.value = null
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id.value}`
    )
    todoData.value = await res.json()
}

fetchData()

watch(id, newId => {
    fetchData()
})
</script>

<template>
    <span>{{ id }}</span>
    <button @click="id++">Id++</button>
    <p v-if="!todoData">Loading...</p>
    <pre v-else>{{ todoData }}</pre>
</template>