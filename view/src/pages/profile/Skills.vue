<template>

    <TabGroup>
        <TabList class="flex space-x-1 bg-gray-100 p-1">
            <Tab
                v-for="category in Object.keys(categories)"
                as="template"
                :key="category"
                v-slot="{ selected }"
                >
                <button
                    :class="[
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-700',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-gray-600 focus:outline-none focus:ring-1',
                    selected
                        ? 'bg-white shadow'
                        : 'text-gray-600 hover:bg-white/[0.12] hover:text-gray-600',
                    ]"
                >
                    {{ category }}
                </button>
            </Tab>
        </TabList>

        <TabPanels class="mt-0 mb-5 border-solid border-2 border-gray-100 rounded-md">
            <TabPanel
                v-for="(posts, idx) in Object.values(categories)"
                :key="idx"
                :class="[
                    'bg-white p-3',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-gray-100 focus:outline-none focus:ring-1 items-center',
                ]"
                >
                <ul class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
                    <li
                      v-for="post in posts"
                      :key="post.id.toString()"
                      class="relative rounded-md p-3 bg-gray-100 hover:bg-gray-200 grop">
                      <a :href="post.link.toString()" target="_blank" rel="noopener noreferrer">
                        <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-white xl:aspect-w-7 xl:aspect-h-8">
                            <img :src="post.imgsrc.toString()" class="p-10 h-full w-full object-cover object-center group-hover:opacity-75" />
                        </div>
                        <div class="mt-4 flex justify-between">
                          <div>
                            <h3 class="mt-1 text-lg font-medium text-gray-900 flex">
                              {{ post.langname }}
                              <p class="ml-3 text-sm text-blue-500">
                                {{ post.star }}
                              </p>
                            </h3>
                            <span class="mt-2 flex text-sm text-gray-500">
                              <TagIcon class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                  {{ post.type }}
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                </ul>
            </TabPanel>
        </TabPanels>
    </TabGroup>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
  import { TagIcon } from '@heroicons/vue/24/outline'
  import { ResentTechStack, CommonUseTechStack, TrainingAndInterest } from '../../store/profile/techStack';

  const categories = ref({
  "Recent": ResentTechStack,
  "Common Use": CommonUseTechStack,
  "Training and Interest": TrainingAndInterest,
})
  </script>