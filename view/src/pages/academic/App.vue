<template>
    <Header />
    <div v-for="paperitem in paper" class="flex items-center justify-center w-5 h-5 mb-4 rounded-full bg-blue-300">
      <p class="text-sm leading-5 text-gray-900">
        {{paperitem.number}}.{{paperitem.auther}} <i>{{paperitem.title}}</i>, ({{paperitem.date}}), {{paperitem.publicedBy}}.
      </p>
      <p class="text-sm leading-5 text-gray-500">
        {{paperitem.doi}}
      </p>
    </div>
    <div v-for="school in schools">
      <StepPanel :stepsdata="school.sp" :achivedata="school.cp" />
    </div>
</template>

<script setup lang="ts">
import Header from '../../components/Header.vue';
import StepPanel from "../../components/StepPanel.vue";
import { paper, schools } from "@/store/profile/academic/univ";
</script>