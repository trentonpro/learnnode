<script setup>
defineProps(['items']);
</script>
<template>
    <h1>All Items</h1>
    <ul>
            <li v-for="item in items">
                <input type="checkbox" v-model="item.isDone">
                {{ item.name }}
            </li>
    </ul>
</template>