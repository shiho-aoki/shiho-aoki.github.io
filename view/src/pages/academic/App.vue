<template>
    <Header />
    <div v-for="school in schools">
      <StepPanel :stepsdata="school.sp" :achivedata="school.cp" />
    </div>
</template>

<script setup lang="ts">
import Header from '../../components/Header.vue';
import StepPanel from "../../components/StepPanel.vue";
import { schools } from "@/store/profile/academic/univ";
</script>