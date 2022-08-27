<script setup>
import Training1 from './components/Training1.vue'
</script>

<template>
    <div class="training-list">
        <div class="training-container">
            <h1 class="training-title">reactive & ref</h1>
            <Training1 />
        </div>
    </div>
</template>

<style scoped>
.training-list {
    display: flex;
    flex-direction: column;
}

.training-container {
    display: flex;
    flex-direction: column;
    margin: 15px;
    padding: 10px;
    border: solid 1px grey;
    border-radius: 5px;
}

.training-title {
    text-decoration: underline;
}
</style>