<template>
    <div v-for="school in schools">
      <StepPanel :stepsdata="school" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StepPanel from "../StepPanel.vue";
import { redu } from '../../middleware/repository' ;

export default defineComponent({
  async setup (){
    const schools =  await redu.getAll();
    return {
        schools
    }
  },
  name: 'Education',
  components: {
    StepPanel
  }
});
</script>