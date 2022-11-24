<template>
  <Header />
  <Listbox as="div" v-model="selected" class="m-2">

    <div class="bg-white py-24 sm:py-32 lg:py-40">
      <div class="mx-auto max-w-7xl px-6 lg:px-8 content-center">
        <div class="sm:text-center">
          <h2 class="text-lg font-semibold leading-8 text-blue-500">since 2019.</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">my working and internship background</p>
          <!-- <div class="flex justify-center mt-4">
            <a :href="url.other.github" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/github/followers/shiho-aoki?label=Follow&style=social" />
            </a>
          </div> -->
        </div>
      </div>
    </div>
    
    <div class="mt-1 relative">
      <ListboxButton class="relative w-full bg-blue-300 border border-blue-300 rounded-md shadow-sm pl-3 pr-10 py-2 cursor-default focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-300 sm:text-sm">
        <span class="flex items-center">
          <span class="ml-3 block truncate text-white">{{ selected.name }}</span>
        </span>
        <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <ListboxOptions class="absolute z-2 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
          <ListboxOption as="template" v-for="person in people" :key="person.id" :value="person" v-slot="{ active, selected }">
            <li :class="[active ? 'text-white bg-blue-300' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9']">
              <div class="flex items-center">
                <span :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']">
                  {{ person.name }}
                </span>
              </div>

              <span v-if="selected" :class="[active ? 'text-white' : 'text-blue-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
  <component v-if="selected.id==1" :is="Job" />
  <component v-else-if="selected.id==2" :is="Internship" />
</template>

<script setup lang="ts">
import Header from '../../components/Header.vue'
import { ref } from 'vue'
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid';

import Internship from './Internship.vue';
import Job from './Job.vue';

const people = [
  {
    id: 1,
    name: 'Working',
  },
  {
    id: 2,
    name: 'Internship',
  },
]
const selected = ref(people[0])

</script>