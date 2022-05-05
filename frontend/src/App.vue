<template>
  <div class="app">
    <p>{{ name }} - {{ age }}</p>
    <button @click="changeName('somi')">Change Name</button>
    <button @click="chagneAge(2)">Change Age</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {},
  data() {
    return {
      name: 'Link',
      age: 10 as number | string    //data type 지정 as
    }
  },
  methods: {
    changeName(name: string) {
      this.name = name
    },
    chagneAge(age: number | string) {
      this.age = age
    }
  }
});
</script>

<style>
</style>
