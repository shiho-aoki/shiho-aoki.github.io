<template>
    <Header />
    <div v-for="tl in timeline" class="my-3 mx-10">
      <TimelinePanel :data="tl"/>
    </div>
</template>

<script setup lang="ts">
import Header from '../../components/Header.vue';
import TimelinePanel from '../../components/TimelinePanel.vue'
import { timeline } from "../../store/timeline/timeline";
</script>