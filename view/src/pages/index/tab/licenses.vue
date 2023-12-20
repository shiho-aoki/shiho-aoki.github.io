<template>
    <TabPanel
        :class="[
            'rounded-xl bg-white p-3','items-center','justify-center',
            'ring-white ring-opacity-60 ring-offset-2 focus:outline-none',
        ]">
        <!-- <div v-for="license in licenses">
            <div class="w-full mb-6">
                <ApplicatInformationVue licenseOrCertification="license" :data="license" />
            </div>
        </div>
        <div v-for="cert in certified">
            <div class="w-full mb-6">
                <ApplicatInformationVue licenseOrCertification="certification" :data="cert" />
            </div>
        </div> -->
    </TabPanel>
</template>

<script setup lang="ts">
    import { TabPanel } from '@headlessui/vue'
    // import { licenses } from '@/store/profile/licenses';
    // import { certified } from '@/store/profile/certifications';
    import ApplicatInformationVue from '@/components/ApplicatInformation.vue';
</script>