<template>
    <div class="overflow-hidden bg-white shadow shadow-blue-500/50 sm:rounded-lg sm:mx-0">
      <div class="px-4 py-5 sm:px-6">
        <p class="mt-1 max-w-2xl text-sm text-blue-500"> {{ licenseOrCertification }} </p>
        <h3 class="text-lg font-medium leading-6 text-gray-900">{{data.title}}</h3>
      </div>
      <div class="border-t border-blue-300">
        <dl>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Issued</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{{data.when}}</dd>
          </div>
          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Approval Authority</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{{data.organ}}</dd>
          </div>
          <div v-if="data.number" class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Credential ID</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{{data?.number}}</dd>
          </div>
          <div v-if="data.about" class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">About</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{{data?.about}}</dd>
          </div>
          <div v-if="data.attachments" class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Attachments</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul role="list" class="divide-y divide-gray-200 rounded-md border border-gray-200">
                <li class="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                  <div class="flex w-0 flex-1 items-center">
                    <PaperClipIcon class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <span class="ml-2 w-0 flex-1 truncate">{{data?.attachments?.filename}}</span>
                  </div>
                  <div class="ml-4 flex-shrink-0">
                    <a :href="data?.attachments?.link" class="font-medium text-indigo-600 hover:text-blue-500">Download</a>
                  </div>
                </li>
                <!-- <li class="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                  <div class="flex w-0 flex-1 items-center">
                    <PaperClipIcon class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <span class="ml-2 w-0 flex-1 truncate">coverletter_back_end_developer.pdf</span>
                  </div>
                  <div class="ml-4 flex-shrink-0">
                    <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
                  </div>
                </li> -->
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
</template>
  
  <script setup lang="ts">
  import { PaperClipIcon } from '@heroicons/vue/20/solid'
  import { IApplicatInfromation } from './interface/applicatInformation'

  defineProps<{licenseOrCertification: string, data: IApplicatInfromation}>();
  </script>