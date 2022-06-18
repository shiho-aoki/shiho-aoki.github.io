<template>
    <span v-for="i in Working">
    <GridPanel :data="i" />
    </span>
</template>

<script setup lang="ts">
import GridPanel from "../../../components/molecules/GridPanel.vue";
import { Working } from "../../../utils/items/work";
</script>