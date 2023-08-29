<template>
  <div v-for="job in jobs">
    <!-- <StepPanel :stepsdata="job.sp" :achivedata="job.cp" /> -->
    <StepPanel :stepsdata="job.sp" />
  </div>
</template>

<script setup lang="ts">
import StepPanel from "../../components/StepPanel.vue";
import { jobs } from "@/store/profile/business/jobs";
</script>