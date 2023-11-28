<template>
    <Header />
    <div class="flex items-center justify-center mt-3">
      <p class="mb-2 text-lg font-bold">Academic Background</p>
    </div>
    <div v-for="school in schools">
      <StepPanel :stepsdata="school.sp" :achivedata="school.cp" />
    </div>

    <div class="flex items-center justify-center">
      <p class="mb-2 text-lg font-bold">Paper</p>
    </div>
    <div v-for="paperitem in paper" class="pt-1 pb-8 mx-8 mb-10">
      <p class="leading-6 text-gray-900 float-left">
        {{paperitem.id}}.&nbsp;{{paperitem.author}},&nbsp;{{paperitem.title}},
        <i>{{paperitem.publishedBy}}</i>, {{ paperitem.edition}},<b>({{paperitem.number}})</b>, {{paperitem.date}}.
        <small>DOI: <a :href="paperitem.doi" target="_blank" rel="noopener noreferrer">{{paperitem.doi}}</a></small>
      </p>
    </div>

</template>

<script setup lang="ts">
import Header from '../../components/Header.vue';
import StepPanel from "../../components/StepPanel.vue";
import { schools } from "@/store/profile/academic/univ";

import { rpaper } from '../../middleware/repository' ;
const paper =  rpaper.getAll()
console.log(paper)
</script>