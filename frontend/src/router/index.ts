import {createRouter, createWebHistory } from "vue-router"
import TodoPage from '../views/TodoPage.vue'
import JobPage from "../views/JobPage.vue";
const routes = [
    { path: '/', redirect: '/todo-list'},
    {
        path: '/todo-list',
        name: 'TODO LIST',
        component: TodoPage
    },
    {
        path: '/ts-work',
        name: 'TS Work',
        component: JobPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router