<script setup>
import { onMounted } from 'vue';
let x = 95;
let y = 50;
 
let balls = [];
onMounted(() => {
    let mycanvas = document.querySelector('#mycanvas');
    console.log(mycanvas);
    let ctx = mycanvas.getContext('2d');
 
    setInterval(() => {
        balls = balls.map(ball => {
            return {
                x: ball.x,
                y: ball.y,
                radius: ball.radius - 1,
                red: ball.red-15,
                green: ball.green-5,
                blue: 0,
            }
        }).filter(ball => ball.radius > 0);
        balls.push({
            x: x,
            y: y,
            radius: 60,
            red: 255,
            green: 0,
            blue: 0,
        });
        ctx.clearRect(0, 0, 1600, 800);
        balls.forEach(ball => {
           
            ctx.beginPath();
            ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
            ctx.fillStyle = `rgb(${ball.red}, ${ball.green}, ${ball.blue})`;
            ctx.fill();
        });
 
    }, 20);
});
 
function keydown(event) {
    console.log(event);
    if (event.code === 'KeyD') {
        x += 5;
    }
    if (event.code === 'KeyA') {
        x -= 5;
    }
    if (event.code === 'KeyS') {
        y += 5;
    }
    if (event.code === 'KeyW') {
        y -= 5;
    }
}
 
function mousemove(event) {
    console.log(event);
    x = event.offsetX;
    y = event.offsetY;
}
 
</script>
 
<template>
    <canvas id="mycanvas" tabindex="1" width="1600" height="800" @mousemove="mousemove"> </canvas>
</template>