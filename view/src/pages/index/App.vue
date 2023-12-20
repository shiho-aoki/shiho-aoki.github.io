
<template>
  <Header />
  <div class="bg-gray-100">
    <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
      <h2 class="text-3xl tracking-tight text-gray-900 sm:text-4xl">
        <span class="block">shiho aoki</span>
        <h3 class="mt-2 flex text-sm text-gray-500">
          Doctor-s Degree, Biomedical Engineering @ Waseda University, Japan<br />
          IATD. Co., Ltd. Chief Technology Officer<br />
          ---<br />
          早稲田大学先進理工学研究科 一貫制博士課程<br />
          株式会社 先端技術開発研究所 最高技術責任者
        </h3>
        <span class="mt-2 flex text-sm text-gray-500">
          <TagIcon class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
          Biotechnology, Development, Computer Science - Software Engineering, Research and Develoment
        </span>
        <!-- <img src="https://github-readme-stats.vercel.app/api?username=shiho-aoki&count_private=true&show_icons=true"
              class="h-auto w-full my-3" /> -->
        <span class="text-lg font-semibold text-blue-500">
          If I have seen further it is by standing on yᵉ sholders of Giants.
        </span>
        <span class="mt-2 flex text-sm">
          <span class="ml-3 inline-flex items-center">
            <a :href="_url.other.github">
            <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white ml-2"
                  src="../../assets/img/sns/github.png" alt="GitHub" />
            </a>
            <a :href="_url.other.linkedin">
            <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white ml-2"
                  src="../../assets/img/sns/linkedin.png" alt="LinkedIn" />
            </a>
            <a :href="_url.other.qiita">
            <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white ml-2"
                  src="../../assets/img/sns/qiita.png" alt="Quita" />
            </a>
          </span>
        </span>
      </h2>
      <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div class="inline-flex rounded-md shadow">
          <a :href="_url.profile.academic" class="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-500 px-5 py-3 text-base font-medium text-white hover:bg-blue-600">
            >> Academic <br>
            (Researcher Profile)
          </a>
        </div>
        <div class="ml-3 inline-flex rounded-md shadow">
          <a :href="_url.profile.business" class="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-blue-500 hover:bg-blue-50">
            >> Business <br>
            (Engineer Profile)
          </a>
        </div>
      </div>
    </div>
  </div>
  
  <div class="mx-auto max-w-8xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
    <div class="px-4">
      <span class="mt-2 max-w-2xl text-xl leading-8 text-gray-600">
        <div class="py-0 sm:px-0">
          <TabGroup manual>
            <TabList class="flex space-x-2 rounded-xl bg-blue-900/20 p-1">
              <Tab
                v-for="category in _categories"
                as="template"
                :key="category"
                v-slot="{ selected }"
              >
                <button
                  :class="[
                    'w-full rounded-lg py-2.5 text-sm font-medium text-lg leading-5 text-blue-700',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white shadow'
                      : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
                  ]"
                >
                  {{ category }}
                </button>
              </Tab>
            </TabList>
            <TabPanels class="mt-2">
              <AboutMe />
              <Experience />
              <Education />
              <Publications />
              <Licenses />
              <Community />
            </TabPanels>
          </TabGroup>
        </div>
      </span>
    </div>
  </div>
  <Footter />
</template>
<script lang="ts">
import Header from '../../components/Header.vue';
import Footter from '../../components/Footter.vue';
import { urls } from '../../store/urls';
import { categories } from '../../store/setting';
import { ref } from 'vue';
import { TagIcon } from '@heroicons/vue/24/outline';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

import AboutMe from './tab/aboutme.vue';
import Experience from './tab/experience.vue';
import Education from './tab/education.vue';
import Publications from './tab/publications.vue';
import Licenses from './tab/licenses.vue';
import Community from './tab/community.vue';

export default {
  name: 'Profile',
  setup(){
    const _url = ref(urls);
    const _categories = ref(categories);
    return {
      _url,
      _categories
    }
  },
  components: {
    Header,
    AboutMe, Experience,Education,Publications,Licenses,Community,
    Footter,
    TagIcon, TabGroup, TabList, Tab, TabPanels, TabPanel
  }
}
</script>