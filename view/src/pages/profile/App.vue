<template>
  <Header />
  <div class="bg-gray-100">
    <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        <span class="block">shiho-aoki @as.+?pml</span>
        <span class="text-lg font-semibold leading-8 text-blue-500">If I have seen further it is by standing on yᵉ sholders of Giants.</span>
      </h2>
      <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div class="inline-flex rounded-md shadow">
          <a :href="url.profile.academic" class="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-500 px-5 py-3 text-base font-medium text-white hover:bg-blue-600">
            academic
          </a>
        </div>
        <div class="ml-3 inline-flex rounded-md shadow">
          <a :href="url.profile.business" class="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-blue-500 hover:bg-blue-50">
            business
          </a>
        </div>
      </div>
    </div>
  </div>
  <div calss="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
    <div class="px-4">
      <span class="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
        Experienced Software Engineer with a demonstrated history of working in the higher education industry. <br />
        Skilled in Python, JavaScript/TypeScript (React, Next, Angular, Vue, Nuxt), Golang, Elang, C++ ,and Google Cloud Platform, AWS etc.<br />
        Engineering professional with a Bachelor of Science - BS focused in Biomedical/Medical Engineering from Waseda University.<br />
      </span>
    </div>
  </div>
  
  <div class="bg-white py-20 sm:py-32 lg:py-20">
    <div class="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 gap-2 content-center">
      <div class="mx-32 px-32">
        <img src="https://github-readme-stats.vercel.app/api?username=shiho-aoki&count_private=true&show_icons=true" 
            class="h-auto w-full object-cover object-center" />
      </div>
      <!-- <div class="mx-32 px-32">
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=shiho-aoki&count_private=true&hide=jupyter%20notebook,html,CSS,Makefile&langs_count=11&layout=compact" 
            class="h-auto w-full object-cover object-center" />
      </div> -->
    </div>
  </div>

  <div class="bg-white py-24 sm:py-32 lg:py-40">
    <div class="mx-auto max-w-7xl px-6 lg:px-8 content-center">
      <div class="sm:text-center">
        <h2 class="text-lg font-semibold leading-8 text-blue-500">skills</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">my tech stack</p>
        <div class="flex justify-center mt-4">
          <a :href="url.other.github" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/github/followers/shiho-aoki?label=Follow&style=social" />
          </a>
        </div>
      </div>
    </div>
  </div>
  <Skills />

  <div class="bg-white py-24 sm:py-32 lg:py-40">
    <div class="mx-auto max-w-7xl px-6 lg:px-8 content-center">
      <div class="sm:text-center">
        <h2 class="text-lg font-semibold leading-8 text-blue-500">since 2017.</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">licenses and certifications</p>
        <!-- <div class="flex justify-center mt-4">
          <a :href="url.other.github" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/github/followers/shiho-aoki?label=Follow&style=social" />
          </a>
        </div> -->
      </div>
    </div>
  </div>
  <div class="justify-center mx-32 mb-6">
    <LicenssesAndCertifications />
  </div>
  <Footter />
</template>

<script lang="ts">
import Header from '../../components/Header.vue';
import Footter from '../../components/Footter.vue';
import Skills from './Skills.vue';
import LicenssesAndCertifications from './LicenssesAndCertifications.vue'
import { urls } from '../../store/urls';
import { ref } from 'vue';

export default {
  name: 'Profile',
  setup(){
    const url = ref(urls);
    return {
      url
    }
  },
  components: {
    Header,
    Skills,
    LicenssesAndCertifications,
    Footter
  }
}
</script>