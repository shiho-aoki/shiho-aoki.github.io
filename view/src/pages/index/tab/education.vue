<template>
    <TabPanel
        :class="[
            'rounded-xl bg-white p-3','items-center','justify-center',
            'ring-white ring-opacity-60 ring-offset-2 focus:outline-none',
        ]">
        <Suspense>
            <template #default>
                <EducationSusp />
            </template>
            <template #fallback>Loading...</template>
        </Suspense>
    </TabPanel>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import { TabPanel } from '@headlessui/vue';
    import EducationSusp from '../../../components/suspense/acad/Education.vue';
    
    export default defineComponent({
        setup (){},
        name: 'Education',
        components: {
            EducationSusp,
            TabPanel
        }
    })
</script>