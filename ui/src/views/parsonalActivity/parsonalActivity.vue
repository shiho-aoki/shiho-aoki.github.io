<template>
    <span v-for="i in Timeline">
    <GridPanel :data="i" />
    </span>
</template>

<script setup lang="ts">
import GridPanel from "../../components/molecules/GridPanel.vue";
import { Timeline } from "../../utils/items/timeline";
</script>