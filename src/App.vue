<script setup>
import { ref } from 'vue';
import Tutorial1 from './components/Tutorial1.vue'
import Tutorial2 from './components/Tutorial2.vue'
import Tutorial3 from './components/Tutorial3.vue';
import Tutorial4 from './components/Tutorial4.vue';
import Tutorial5 from './components/Tutorial5.vue';
import Tutorial6 from './components/Tutorial6.vue';
import Tutorial7 from './components/Tutorial7.vue';
import Tutorial8 from './components/Tutorial8.vue';
import Tutorial9 from './components/Tutorial9.vue';
import Tutorial10 from './components/Tutorial10.vue';
import Tutorial11 from './components/Tutorial11.vue';
import Tutorial12 from './components/Tutorial12.vue';
import Congratulations from './components/Congratulations.vue';
import { RouterLink, RouterView } from 'vue-router';

const tutorial10property = ref('Tuğkan')

const tutorial11ChildMsg = ref(null)
function tutorial11RenderChildMessage(_msg) {
    tutorial11ChildMsg.value = _msg
}
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
        <div class="training-container">
            <h1 class="training-title">8 - Lifecycle and Template Refs</h1>
            <Tutorial8 />
        </div>
        <div class="training-container">
            <h1 class="training-title">9 - Watchers</h1>
            <Tutorial9 />
        </div>
        <div class="training-container">
            <h1 class="training-title">10 - Props</h1>
            <Tutorial10 :message="tutorial10property" />
        </div>
        <div class="training-container">
            <h1 class="training-title">11 - Emits</h1>
            <Tutorial11 @response="(msg) => tutorial11RenderChildMessage(msg)" />
            <span style="color: darkgreen; font-weight: bold;">{{ tutorial11ChildMsg }}</span>
        </div>
        <div class="training-container">
            <h1 class="training-title">12 - Slots</h1>
            <Tutorial12>
                <span style="color: darkred; font-weight: bold;">Hello from parent!</span>
            </Tutorial12>
        </div>
        <div class="training-container">
            <h1 class="training-title">🎉 Congratulations!</h1>
            <Congratulations />
        </div>
    </div>
    <div class="router-view-container">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <br />
        <hr />
        <br />
        <RouterView />
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

.router-view-container {
    display: flex;
    flex-direction: column;
    margin: 15px;
    padding: 10px;
    border: solid 1px grey;
    border-radius: 5px;
}

.router-link-active {
    font-weight: bolder
}
</style>