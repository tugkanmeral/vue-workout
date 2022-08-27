<script setup>
import Tutorial1 from './components/Tutorial1.vue'
import Tutorial2 from './components/Tutorial2.vue'
import Tutorial3 from './components/Tutorial3.vue';
import Tutorial4 from './components/Tutorial4.vue';
import Tutorial5 from './components/Tutorial5.vue';
import Tutorial6 from './components/Tutorial6.vue';
import Tutorial7 from './components/Tutorial7.vue';
</script>

<template>
    <div class="training-list">
        <div class="training-container">
            <h1 class="training-title">1 - Declarative Rendering</h1>
            <Tutorial1 />
        </div>
        <div class="training-container">
            <h1 class="training-title">2 - Attribute Bindings</h1>
            <Tutorial2 />
        </div>
        <div class="training-container">
            <h1 class="training-title">3 - Event Listeners</h1>
            <Tutorial3 />
        </div>
        <div class="training-container">
            <h1 class="training-title">4 - Form Bindings</h1>
            <Tutorial4 />
        </div>
        <div class="training-container">
            <h1 class="training-title">5 - Conditional Rendering</h1>
            <Tutorial5 />
        </div>
        <div class="training-container">
            <h1 class="training-title">6 - List Rendering</h1>
            <Tutorial6 />
        </div>
        <div class="training-container">
            <h1 class="training-title">7 - Computed Property</h1>
            <Tutorial7 />
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