<template>
    <TabPanel
        :class="[
            'rounded-xl bg-white p-3','items-center','justify-center',
            'ring-white ring-opacity-60 ring-offset-2 focus:outline-none',
        ]">
        <!-- <span class="text-sm" v-on:click="transferNewDataSets"> -->
        <span class="text-sm">
        .........................................
        ..........................................
        ................................................ 
        comming soon 
        ..................................................
        ..................................................
        ........................................................
        ........................................................
        </span>
   </TabPanel>
</template>

<script setup lang="ts">
    import { TabPanel } from '@headlessui/vue';
    import { transferNewDataSets } from '../../../../middleware/db/transfer'
</script>