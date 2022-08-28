<script setup>
import JSConfetti from 'js-confetti'

const confetti = new JSConfetti()

function throwConfetti() {
    confetti.addConfetti({
        emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
    })
}
</script>

<template>
    <button @click="throwConfetti">Throw!</button>
</template>