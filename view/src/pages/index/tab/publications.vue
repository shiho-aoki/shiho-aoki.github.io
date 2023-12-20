<template>
    <TabPanel
        :class="[
            'rounded-xl bg-white p-3','items-center','justify-center',
            'ring-white ring-opacity-60 ring-offset-2 focus:outline-none',
        ]">
        <div class="flex items-center justify-center">
            <p class="mb-2 text-lg font-bold">Paper</p>
        </div>
        <Suspense>
            <template #default>
                <PaperSusp />
            </template>
            <template #fallback>Loading...</template>
        </Suspense>
    </TabPanel>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import { TabPanel } from '@headlessui/vue'
    import PaperSusp from '../../../components/suspense/Paper.vue';

    export default defineComponent({
        setup (){},
        name: 'Publications',
        components: {
            TabPanel,
            PaperSusp,
        }
    })
</script>