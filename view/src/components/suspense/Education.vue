<template>
    <div v-for="school in schoolSteps">
      <StepPanel :stepsdata="school" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { DocumentData } from "@firebase/firestore";

import StepPanel from "../core/StepPanel.vue";
import { redu } from '../../middleware/repository' ;
import { toStepPanelFromShools } from '../interface/changes/StepPanel';


export default defineComponent({
  async setup (){
    const schools = await redu.getAll();
    const schoolSteps = toStepPanelFromShools(schools as DocumentData[]);
    return {
      schoolSteps
    }
  },
  name: 'Education',
  components: {
    StepPanel
  }
});
</script>