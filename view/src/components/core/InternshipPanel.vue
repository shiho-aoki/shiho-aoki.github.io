<template>
    <div class="lg:py-6 lg:pr-16">
      <div v-for="edu in edudata" class="flex">
        <div class="flex flex-col items-center mr-4">
          <div>
            <div class="flex items-center justify-center w-10 h-10 border rounded-full">
              <svg class="w-4 text-gray-600" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <line fill="none" stroke-miterlimit="10" x1="12" y1="2" x2="12" y2="22"></line>
                <polyline fill="none" stroke-miterlimit="10" points="19,15 12,22 5,15"></polyline>
              </svg>
            </div>
          </div>
          <div class="w-px h-full bg-blue-300"></div>
        </div>
        <div class="pt-1 pb-8">
          <p class="mb-2 text-lg font-bold">{{edu.companyname}}</p>
          <p class="text-gray-700 text-sm flex mb-2">
            <ViewfinderCircleIcon class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            {{edu.position}}
          </p>
          <p class="text-gray-700 text-sm flex">
            <CalendarDaysIcon class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
              {{edu.time}}
          </p>
          <p class="text-gray-600 text-sm mt-2">
            {{ edu.context }}
          </p>
        </div>
      </div>

      <div class="flex">
        <div class="flex flex-col items-center mr-4">
          <div>
            <div class="flex items-center justify-center w-10 h-10 border rounded-full">
              <svg class="w-6 text-gray-600" stroke="currentColor" viewBox="0 0 24 24">
                <polyline fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="6,12 10,16 18,8"></polyline>
              </svg>
            </div>
          </div>
        </div>
        <div class="pt-1">
          <p class="mb-2 text-lg font-bold">{{end}}</p>
          <p class="text-gray-700"></p>
        </div>
      </div>
    </div>
    <!-- <div class="relative">
      <ContentesPanel :achivedata="achivedata" />
    </div> -->
  </template>
  
  <script setup lang="ts">
  import { IInternship } from "../../middleware/db/interface";
  import { CalendarDaysIcon, ViewfinderCircleIcon } from "@heroicons/vue/20/solid"

  defineProps<{edudata: Array<IInternship>, end: string}>();
  </script>