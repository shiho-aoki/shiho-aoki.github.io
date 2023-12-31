<template>
    <TabPanel
        :class="[
            'rounded-xl bg-white p-3','items-center','justify-center',
            'ring-white ring-opacity-60 ring-offset-2 focus:outline-none',
        ]">
        <Suspense>
            <template #default>
                <JobSubs/>
            </template>
            <template #fallback>Loading...</template>
        </Suspense>

        <span class="text-lg font-semibold text-blue-500">
          Internship Experience
        </span>

        <Suspense>
            <template #default>
                <InternshipSubs />
            </template>
            <template #fallback>Loading...</template>
        </Suspense>

    </TabPanel>
</template>

<script setup lang="ts">
    import { TabPanel } from '@headlessui/vue'
    import JobSubs from '../../../components/suspense/busi/Job.vue'
    import InternshipSubs from '../../../components/suspense/busi/Internship.vue'
</script>