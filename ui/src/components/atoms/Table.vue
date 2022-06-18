<template>
    <div :class="[colurPicker ? 'bg-gray-100':'bg-white','atom-table-line']">
        <dt class="atom-table-dt">{{title}}</dt>
        <dd class="atom-table-dd">{{discription}}</dd>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string,
    discription: string,
    colurPicker: boolean
}>();
</script>