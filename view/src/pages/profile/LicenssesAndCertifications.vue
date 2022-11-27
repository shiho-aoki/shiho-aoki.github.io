<template>
  <div v-for="license in licenses">
    <div class="w-full mb-6">
      <ApplicatInformationVue licenseOrCertification="license" :data="license" />
    </div>
  </div>
  <div v-for="cert in certified">
    <div class="w-full mb-6">
      <ApplicatInformationVue licenseOrCertification="certification" :data="cert" />
    </div>
  </div>
</template>
  
<script setup lang="ts">
import ApplicatInformationVue from '../../components/ApplicatInformation.vue';
import { licenses } from '../../store/profile/licenses';
import { certified } from '../../store/profile/certifications';
</script>