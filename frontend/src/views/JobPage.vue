<template>
  <header>
    <router-link to="/todo-list">TODO 리스트</router-link>
    <div class="order">
      <button @click="handleClick('title')">order by title</button>
      <button @click="handleClick('salary')">order by salary</button>
      <button @click="handleClick('location')">order by location</button>
    </div>
  </header>
  <job-list :jobs="jobs" :order="order"/>
</template>

<script lang="ts">
import {defineComponent, reactive, ref, toRefs} from 'vue';
import JobList from "../components/JobList.vue"
import Job from "../types/Job";
import OrderTerm from "../types/OrderTerm";

export default defineComponent({
  components: {JobList},
  setup() {

    const jobs = ref<Job[]>([
      { title: 'farm worker', location: 'lon lon ranch', salary: 30000, id: '1'},
      { title: 'quarryman', location: 'death mountain', salary: 40000, id: '2'},
      { title: 'flute player', location: 'the lost woods', salary: 35000, id: '3'},
      { title: 'fisherman', location: 'lake hylia', salary: 21000, id: '4'},
      { title: 'prison guard', location: 'gerudo valley', salary: 32000, id: '5'},
    ])

    const order = ref<OrderTerm>('title') // default value

    // 여러 타입의 변수를 컨트롤 하기 위해 OrderTerm type 생성 후 지정
    const handleClick = (term: OrderTerm) => {
      order.value = term
    }

    return { jobs, handleClick, order };
  },
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
