<template>
    <TabPanel
        :class="[
            'rounded-xl bg-white p-3','items-center','justify-center',
            'ring-white ring-opacity-60 ring-offset-2 focus:outline-none',
        ]">
        <!-- <Suspense>
            <template #default>
                <Education />
            </template>
            <template #fallback>Loading...</template>
        </Suspense> -->
    </TabPanel>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import { TabPanel } from '@headlessui/vue';
    import Education from '../../../components/suspense/Education.vue';
    
    export default defineComponent({
        setup (){},
        name: 'Education',
        components: {
            Education,
        }
    })
</script>