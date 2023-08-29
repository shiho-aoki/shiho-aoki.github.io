<template>
    <TabPanel
        :class="[
            'rounded-xl bg-white p-3','items-center','justify-center',
            'ring-white ring-opacity-60 ring-offset-2 focus:outline-none',
        ]">
    </TabPanel>
</template>

<script setup lang="ts">
    import { TabPanel } from '@headlessui/vue'
</script>