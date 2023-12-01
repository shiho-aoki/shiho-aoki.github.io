<template>
    <TabPanel
        :class="[
            'rounded-xl bg-white p-3','items-center','justify-center',
            'ring-white ring-opacity-60 ring-offset-2 focus:outline-none',
        ]">
        <div v-for="school in schools">
            <StepPanel :stepsdata="school.sp" />
        </div>
    </TabPanel>
</template>

<script setup lang="ts">
    import { TabPanel } from '@headlessui/vue'
    import StepPanel from '@/components/StepPanel.vue';
    import { schools } from '@/store/profile/academic/univ';
</script>