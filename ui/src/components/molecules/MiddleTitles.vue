<template>
    <div class="middle-title">
        <div class="middle-meta">
            <h3>{{title}}</h3>
            <p>{{discription}}</p>
        </div>
        <div class="middle-component">
            <component :is="component" />
        </div>
    </div>
</template>

<script setup lang="ts">
    defineProps<{
        component: any
        title: string,
        discription: string,
    }>();
</script>