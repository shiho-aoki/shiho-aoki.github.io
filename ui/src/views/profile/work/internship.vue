<template>
    <span v-for="i in InternShip">
    <GridPanel :data="i" />
    </span>
</template>

<script setup lang="ts">
import GridPanel from "../../../components/molecules/GridPanel.vue";
import { InternShip } from "../../../utils/items/work";
</script>