<template>
  <div class="app">
    <job-list :jobs="jobs"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue';
import Job from './types/Job'
import JobList from './components/JobsList.vue'

export default defineComponent({
  name: 'App',
  components: { JobList },
  setup() {
    const jobs = ref<Job[]>([
      { title: 'Backend Dev', location: 'Seoul', salary: 100, id: '1' },
      { title: 'Frontend Dev', location: 'Seoul', salary: 100, id: '2' },
      { title: 'farm worker', location: 'Seoul', salary: 500, id: '3' },
      { title: 'fisherman', location: 'Seoul', salary: 200, id: '4' },
    ])

    return { jobs }
  }
});
</script>

<style>
</style>
