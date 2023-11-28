<template>
    <div class="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
        <svg viewBox="0 0 88 88" class="w-full max-w-screen-xl text-blue-100">
          <circle fill="currentColor" cx="44" cy="44" r="15.5"></circle>
          <circle fill-opacity="0.2" fill="currentColor" cx="44" cy="44" r="44"></circle>
          <circle fill-opacity="0.2" fill="currentColor" cx="44" cy="44" r="37.5"></circle>
          <circle fill-opacity="0.3" fill="currentColor" cx="44" cy="44" r="29.5"></circle>
          <circle fill-opacity="0.3" fill="currentColor" cx="44" cy="44" r="22.5"></circle>
        </svg>
      </div>

      <div class="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
        <div v-for="data in achivedata" class="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
          <div class="p-5">
            <div class="flex items-center justify-center w-5 h-5 mb-4 rounded-full bg-blue-300"></div>
            <p class="mb-2 font-bold">{{data.headline}}</p>
            <p class="text-sm leading-5 text-gray-900">
              {{data.article}}
            </p>
            <a v-if="data.urls" :href="data.urls.ref">
              <div class="mt-2 flex items-center text-sm text-gray-500">
                <LinkIcon class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                {{data.urls.name}}
              </div>
            </a>
          </div>
          <div class="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"></div>
        </div>
      </div>

    </div>
</template>
  
<script setup lang="ts">
import { IContentesPanel } from "../interface/panel";
import { LinkIcon } from '@heroicons/vue/20/solid'
defineProps<{achivedata: Array<IContentesPanel>}>();
</script>