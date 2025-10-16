<script setup>
import { ref } from 'vue';
import ItemList from './itemList.vue';

let newItem = ref('');
let i = 1;
let items = ref([
{id: i++, name:'Leib', isDone: false},
{id: i++, name:'Sai', isDone: true},
{id: i++, name:'Õlu', isDone: false},
{id: i++, name:'Viin', isDone: true},
]);
let code = ref(404);
function addItem(){
    items.value.push({id: i++, name: newItem.value, isDone: false});
    newItem.value = '';
}

let doneItems = computed(() => {
    return items.filter(item => item.isDone);
});

let doneItems = computed(() => {
    return items.filter(item => item.isDone);
});

</script>
<template>
<div class="container">
    <div class="content">
        <div class="field has-addons">
            <div class="control is-expanded">
                <input v-model="newItem" class="input" type="text" placeholder="Add item">
            </div>
            <div class="control">
                <button class="button is-info" @click="addItem">
                    Add item
                </button>
            </div>
        </div>
        <h1>{{ newItem }}</h1>

        <ItemList :items="items" title="All Items"></ItemList>
        <ItemList :items="doneItems" title="Done Items"></ItemList>
        <ItemList :items="toDoItems" title="To Do Items"></ItemList>
        <h1>All Items</h1>
        <ul>
            <li v-for="item in items">
                <input type="checkbox" v-model="item.isDone">
                {{ item.name }}
            </li>
        </ul>
        <input v-model="code" class="input" type="number" placeholder="Enter Error code">
        <img :src="'https://http.cat/' + code">
    </div>
</div>
</template>
