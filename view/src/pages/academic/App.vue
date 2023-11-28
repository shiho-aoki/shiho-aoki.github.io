<template>
    <Header />
    <div class="flex items-center justify-center mt-3">
      <p class="mb-2 text-lg font-bold">Academic Background</p>
    </div>
    
    <Suspense>
      <template #default>
        <Education />
      </template>
      <template #fallback>Loading...</template>
    </Suspense>

    <div class="flex items-center justify-center">
      <p class="mb-2 text-lg font-bold">Paper</p>
    </div>
    <Suspense>
      <template #default>
        <Paper />
      </template>
      <template #fallback>Loading...</template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from '../../components/Header.vue';
import Paper from '../../components/suspense/Paper.vue';
import Education from '../../components/suspense/Education.vue';

export default defineComponent({
  setup (){},
  name: 'App',
  components: {
    Header,
    Paper,
    Education,
  }
});
</script>