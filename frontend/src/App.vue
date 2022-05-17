<template>
  <div class="app">
    <header>
      <div class="title">
        <h1>TypeScript Study</h1>
      </div>
      <div class="order">
        <button @click="handleClick('title')">order by title</button>
        <button @click="handleClick('salary')">order by salary</button>
        <button @click="handleClick('location')">order by location</button>    
      </div>
    </header>
        <job-list :jobs="jobs" :order="order" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue';
import Job from './types/Job'
import JobList from './components/JobsList.vue'
import OrderTerm from './types/OrderTerm'

export default defineComponent({
  name: 'App',
  components: { JobList },
  setup() {
    const jobs = ref<Job[]>([
      { title: 'Backend Dev', location: 'Seoul', salary: 100, id: '1' },
      { title: 'Frontend Dev', location: 'LA', salary: 100, id: '2' },
      { title: 'farm worker', location: 'Jeju', salary: 500, id: '3' },
      { title: 'fisherman', location: 'Suwon', salary: 200, id: '4' },
    ])
    const order = ref<OrderTerm>('title')

    const handleClick = (term: OrderTerm) => {
      order.value = term
    }

    return { jobs, handleClick, order }
  }
});
</script>

<style>
  header {
    text-align: center;
  }
  header .order {
    margin-top: 20px;
  }
  button {
    margin: 0 10px;
    color: #1195c9;
    border: 3px solid #1195c9;
    background: #d5f0ff;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
  }
</style>
