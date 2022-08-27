<script setup>
import { computed } from '@vue/reactivity';
import { reactive, ref } from 'vue';

let id = 0;
const todos = ref([])
const hideCompleted = ref(false)
const toDoItem = reactive({ id: id++, text: '', done: false })

function addNewToDo() {
    console.log(toDoItem.id)
    todos.value.push({ id: id++, text: toDoItem.text, done: false })
    toDoItem.text = ''
}

function removeToDo(_todo) {
    var index = todos.value.indexOf(_todo);
    if (index !== -1) {
        todos.value.splice(index, 1);
    }
}

const filteredTodos = computed(() => {
    if (hideCompleted.value)
        return todos.value.filter(_todo => _todo.done == false);
    else
        return todos.value;
});

</script>

<template>
    <ul>
        <li v-for="todo in filteredTodos" :key="todo.id">
            <input type="checkbox" v-model="todo.done">
            <span :class="{ done: todo.done }">{{ todo.text }}</span>
            <button @click="removeToDo(todo)">x</button>
        </li>
    </ul>
    <input v-model="toDoItem.text" />
    <button @click="addNewToDo">Add</button>
    <button @click="hideCompleted = !hideCompleted">
        {{ hideCompleted ? 'Show all' : 'Hide completed' }}
    </button>
</template>

<style>
.done {
    text-decoration: line-through;
}
</style>