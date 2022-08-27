<script setup>
import { reactive, ref } from 'vue';

let id = 0;
const toDos = ref([])
const toDoItem = reactive({ id: id++, text: '' })

function addNewToDo() {
    console.log(toDoItem.id)
    toDos.value.push({ id: id++, text: toDoItem.text })
    toDoItem.text = ''
}

function removeToDo(_todo) {
    var index = toDos.value.indexOf(_todo);
    if (index !== -1) {
        toDos.value.splice(index, 1);
    }
}
</script>

<template>
    <ul>
        <li v-for="todo in toDos" :key="todo.id">
            {{ todo.id }} - {{ todo.text }}
            <button @click="removeToDo(todo)">x</button>
        </li>
    </ul>
    <input v-model="toDoItem.text" />
    <button @click="addNewToDo">Add</button>
</template>