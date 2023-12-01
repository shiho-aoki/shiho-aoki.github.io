<template>
    <TabPanel
        :class="[
            'rounded-xl bg-white p-3','items-center','justify-center',
            'ring-white ring-opacity-60 ring-offset-2 focus:outline-none',
        ]">
        <div class="flex items-center justify-center">
            <p class="mb-2 text-lg font-bold">Paper</p>
        </div>
        <div v-for="paperitem in paper" class="pt-1 pb-8 mx-8 mb-10">
            <p class="leading-7 text-gray-600 float-left text-sm">
                {{paperitem.id}}.&nbsp;{{paperitem.auther}},&nbsp;{{paperitem.title}},
                <i>{{paperitem.publicedBy}}</i>, {{ paperitem.edition}},<b>({{paperitem.number}})</b>, {{paperitem.date}}.
                <br />
                <small>DOI: <a :href="paperitem.doi" target="_blank" rel="noopener noreferrer">{{paperitem.doi}}</a></small>
            </p>
        </div>
    </TabPanel>
</template>

<script setup lang="ts">
    import { TabPanel } from '@headlessui/vue'
    import { paper } from '@/store/profile/academic/univ';
</script>