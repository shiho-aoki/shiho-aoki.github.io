<template>
    <TabPanel
        :class="[
            'rounded-xl bg-white p-3','items-center','justify-center',
            'ring-white ring-opacity-60 ring-offset-2 focus:outline-none',
        ]">
        <Job />
        <span class="text-lg font-semibold text-blue-500">
          Internship Experience
        </span>
        <Internship />
    </TabPanel>
</template>

<script setup lang="ts">
    import { TabPanel } from '@headlessui/vue'
    import Job from '../../business/Job.vue'
    import Internship from '../../business/Internship.vue'
</script>