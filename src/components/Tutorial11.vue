<script setup>
const emit = defineEmits(['response'])
emit('response', 'Hello from child')
</script>