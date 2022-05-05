<template>
  <div class="app">
    <p>{{ name }} - {{ age }}</p>
    <button @click="changeName('somi')">Change Name</button>
    <button @click="chagneAge(2)">Change Age</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue';

export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    // const state = reactive({
    //   name: 'Link',
    //   age: 25 as string | number
    // })

    // state.name = 'yeony'
    // state.age = 9

    // return { ...toRefs(state) }

    const name = ref('Link')       //ref object not actual value
    const age = ref<number | string>(19)

    return { name, age }
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
