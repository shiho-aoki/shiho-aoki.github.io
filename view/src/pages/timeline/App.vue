<template>
    <Header />
    <TimelinePanel :data="testdata"/>
</template>

<script lang="ts">
import { ref } from 'vue';
import Header from '../../components/Header.vue';
import TimelinePanel from '../../components/TimelinePanel.vue'

export default {
  name: 'App',
  setup(){
    const testdata = ref({
      title: "string",
      type: "string",
      where: "string",
      when: "string",
      published: true
    });

    return {testdata}
  },
  components: {
    Header,
    TimelinePanel
  }
}
</script>