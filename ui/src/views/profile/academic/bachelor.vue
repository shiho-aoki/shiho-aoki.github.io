<template>
    <span v-for="i in BachelorActivity">
    <GridPanel :data="i" />
    </span>
</template>

<script setup lang="ts">
import GridPanel from "../../../components/molecules/GridPanel.vue";
import { BachelorActivity } from "../../../utils/items/bachelor";
</script>