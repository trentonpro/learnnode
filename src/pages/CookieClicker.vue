<script setup>
import { ref } from 'vue';
 
let cookies = ref(0);
 
function buyCursor() {
    cookies.value -= 15;
    setInterval(() => {
        cookies.value = Math.floor((cookies.value + 0.1) * 10);
    }, 1000);
}
 
</script>
<template>
    <div class="Columns">
        <div class="column has-background-primary has-text-centered">
            <h1>{{ cookies }} cookies!</h1>
            <div @click="cookies++">
              <img src="https://clipartcraft.com/images/cookie-clipart-transparent-background-5.png"></img>
            </div>
        </div>
        <div class="column has-background-warning">
            test
        </div>
        <div class="column has-background-info">
            test
        </div>
        <div class="column has-background-info">
            <button class="button is-primary"> Buy cursor</button>
        </div>
    </div>
</template>