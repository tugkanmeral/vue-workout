<script setup>

import { reactive, ref } from 'vue'

//reactive() only works on objects (including arrays and built-in types like Map and Set).
const counter = reactive({
    count: 0
})
const counter2 = reactive({
    count: 1
})

// ref() can take any value type and create an object that exposes the inner value under a .value property
const title = ref('Counter')

// when you want to use a const that described using ref in script block, you must use .value
console.log(title.value)

</script>

<template>
    <h4>{{ title }}</h4>
    <p>{{ counter.count }}</p>
    <!-- The content inside the mustaches is not limited to just identifiers or paths - we can use any valid JavaScript expression: -->
    <h4>{{ title.split('').reverse().join('') }}</h4>
    <p>{{ counter2.count }}</p>
</template>