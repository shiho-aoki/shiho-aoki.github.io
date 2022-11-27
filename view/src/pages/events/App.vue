<template>
  <Header />
  <div v-for="event in events">
    <EventPanel :stepsdata="event.sp" :achivedata="event.cp" />
  </div>
</template>

<script setup lang="ts">
import Header from '../../components/Header.vue';
import EventPanel from "../../components/EventPanel.vue";
import { events } from "../../store/events/events";
</script>