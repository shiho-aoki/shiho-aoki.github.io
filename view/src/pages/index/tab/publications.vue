<template>
    <TabPanel
        :class="[
            'rounded-xl bg-white p-3','items-center','justify-center',
            'ring-white ring-opacity-60 ring-offset-2 focus:outline-none',
        ]">
        <div>
            <div class="flex items-center justify-center">
                <p class="mb-2 text-lg font-bold">Paper</p>
            </div>
            <Suspense>
                <template #default>
                    <PaperSusp />
                </template>
                <template #fallback>Loading...</template>
            </Suspense>
        </div>
        
        <div>
            <div class="flex items-center justify-center">
                <p class="mb-2 text-lg font-bold">Conferences</p>
            </div>
            <Suspense>
                <template #default>
                    <ConfSusp />
                </template>
                <template #fallback>Loading...</template>
            </Suspense>
        </div>
    </TabPanel>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import { TabPanel } from '@headlessui/vue'
    import PaperSusp from '../../../components/suspense/acad/Paper.vue';
    import ConfSusp from "../../../components/suspense/acad/Conf.vue";

    export default defineComponent({
        setup (){},
        name: 'Publications',
        components: {
            TabPanel,
            PaperSusp,
            ConfSusp
        }
    })
</script>