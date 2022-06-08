<script setup lang="ts">
defineProps<{
    mainItem: any
}>();
</script>
<template>
    <div class="mt-2 ml-5" v-for="item in mainItem">
      <h1 class="text-2xl font-extrabold text-gray-900">
        <a :href="item.itemULR">{{item.itemName}}</a>
      </h1>
    </div>
</template>