<template>
    <div class="mx-2 lg:flex lg:items-center lg:justify-between">
    <div class="min-w-0 flex-1">
      <div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
        <a :href="data.typeUrl" target="_blank" rel="noopener noreferrer">
          <div class="mt-2 flex items-center text-sm text-gray-500">
              <PlayIcon class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
              {{data.type}}
          </div>
        </a>
        <div class="mt-2 flex items-center text-sm text-gray-500">
          <MapPinIcon class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
          {{data.where}}
        </div>
        <div class="mt-2 flex items-center text-sm text-gray-500">
          <CalendarDaysIcon class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
          {{data.when}}
        </div>
      </div>
      <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">{{data.title}}</h2>
    </div>
    <div class="mt-5 flex lg:mt-0 lg:ml-4">
      <span class="ml-3">
        <a :href="data.url" target="_blank" rel="noopener noreferrer">
          <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
            <LinkIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            View
          </button>
        </a>
      </span>

      <span :v-if="data.published === true" class="sm:ml-3 hidden sm:block">
        <button type="button" class="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          <CheckIcon class="-ml-1 mr-2 h-5 w-5 text-gray-500" aria-hidden="true" />
          Published
        </button>
      </span>

      <!-- Dropdown -->
      <Menu as="div" class="relative ml-3 sm:hidden">
        <MenuButton class="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          More
          <ChevronDownIcon class="-mr-1 ml-2 h-5 w-5 text-gray-500" aria-hidden="true" />
        </MenuButton>

        <transition enter-active-class="transition ease-out duration-200" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
          <MenuItems class="absolute right-0 z-10 mt-2 -mr-1 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <!-- <MenuItem v-slot="{ active }">
              <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Edit</a>
            </MenuItem> -->
            <MenuItem v-slot="{ active }">
              <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Published</a>
            </MenuItem>
          </MenuItems>
        </transition>
      </Menu>
    </div>
  </div>

</template>

<script setup lang="ts">
import {
  CalendarDaysIcon,
  CheckIcon,
  ChevronDownIcon,
  LinkIcon,
  MapPinIcon,
  PlayIcon
} from '@heroicons/vue/20/solid'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import { ITimeline } from './interface/timeline';

defineProps<{data: ITimeline}>();

</script>
