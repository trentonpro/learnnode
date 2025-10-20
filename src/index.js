import './style.scss';
 
import { createApp } from 'vue';
 
import App from './App.vue';
 
import { createMemoryHistory, createWebHashHistory, createRouter } from 'vue-router';
 
import ToDo from './pages/ToDo.vue';
import Modals from './pages/Modals.vue';
 
const routes = [
    { path: '/', component: ToDo },
    { path: '/modals', component: Modals },
]
 
export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
 
let app = createApp(App);
app.use(router);
app.mount('#app');