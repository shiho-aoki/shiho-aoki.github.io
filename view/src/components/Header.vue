<template>
    <Popover class="relative bg-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <div class="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <a :href="urls.profile.overview">
              <span class="sr-only">as pml</span>
              <img class="h-8 w-auto sm:h-10" src="/assets/logo/logo-with-title.png" alt=" as.+?pml" />
            </a>
          </div>
          <div class="-my-2 -mr-2 md:hidden">
            <PopoverButton class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span class="sr-only">Open menu</span>
              <Bars3Icon class="h-6 w-6" aria-hidden="true" />
            </PopoverButton>
          </div>
          <PopoverGroup as="nav" class="hidden space-x-10 md:flex">
            
            <a :href="urls.latest" class="text-base font-medium text-gray-500 hover:text-gray-900">latest activity</a>
            <a :href="urls.timeline" class="text-base font-medium text-gray-500 hover:text-gray-900">timeline</a>

            <Popover class="relative" v-slot="{ open }">
              <PopoverButton :class="[open ? 'text-gray-900' : 'text-gray-500', 'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2']">
                <span>profile</span>
                <ChevronDownIcon :class="[open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
              </PopoverButton>
  
              <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
                <PopoverPanel class="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                  <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      <a v-for="item in profile" :key="item.name" :href="item.href" class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
                        <component :is="item.icon" class="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                        <div class="ml-4">
                          <p class="text-base font-medium text-gray-900">{{ item.name }}</p>
                          <p class="mt-1 text-sm text-gray-500">{{ item.description }}</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </PopoverPanel>
              </transition>
            </Popover>
  
            <Popover class="relative" v-slot="{ open }">
              <PopoverButton :class="[open ? 'text-gray-900' : 'text-gray-500', 'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2']">
                <span>other</span>
                <ChevronDownIcon :class="[open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
              </PopoverButton>
  
              <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
                <PopoverPanel class="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                  <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      <a v-for="item in resources" :key="item.name" :href="item.href" class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
                        <component :is="item.icon" class="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                        <div class="ml-4">
                          <p class="text-base font-medium text-gray-900">{{ item.name }}</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </PopoverPanel>
              </transition>
            </Popover>

            <a :href="urls.technote" class="text-base font-medium text-gray-500 hover:text-gray-900">
                <p class="float-left mr-3"> tech note </p>
                <LinkIcon class="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
            </a>

          </PopoverGroup>
        </div>
      </div>
  
      <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
        <PopoverPanel focus class="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          <div class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div class="px-5 pt-5 pb-6">
              <div class="flex items-center justify-between">
                <p class="text-base font-medium text-gray-900"> Profile </p>
                <div>
                  <PopoverButton class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span class="sr-only">Close menu</span>
                    <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="mt-6">
                <nav class="grid gap-y-8">
                  <a v-for="item in profile" :key="item.name" :href="item.href" class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                    <component :is="item.icon" class="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                    <span class="ml-3 text-base font-medium text-gray-900">{{ item.name }}</span>
                  </a>
                </nav>
              </div>
            </div>
            <div class="space-y-6 py-6 px-5">
              <div class="grid grid-cols-2 gap-y-4 gap-x-8">

                <a :href="urls.latest" class="text-base font-medium text-gray-900 hover:text-gray-700">latest activity</a>
                <a :href="urls.timeline" class="text-base font-medium text-gray-900 hover:text-gray-700">timeline</a>
                <a :href="urls.technote" class="text-base font-medium text-gray-900 hover:text-gray-700">
                    <p class="float-left mr-3"> tech note </p>
                    <LinkIcon class="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                </a>

                <a v-for="item in resources" :key="item.name" :href="item.href" class="text-base font-medium text-gray-900 hover:text-gray-700">
                    {{ item.name }}
                </a>
              </div>
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </template>
  
  <script setup lang="ts">
  import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
  import {
    AtSymbolIcon,
    Bars3Icon,
    BookmarkSquareIcon,
    CalendarIcon,
    AcademicCapIcon,
    CheckIcon,
    FingerPrintIcon,
    XMarkIcon,
    LinkIcon
  } from '@heroicons/vue/24/outline'
  import { ChevronDownIcon } from '@heroicons/vue/20/solid'

  const urls = {
    technote: "https://note.as-pml.com/",
    latest: "latest/index.html",
    timeline: "timeline/index.html",
    profile: {
      overview: "/profile/index.html",
      academic: "/profile/academic/index.html",
      business: "/profile/business/index.html",
    },
    other: {
      qiita: "https://qiita.com/as_pml",
      zenn: "https://zenn.dev/as_pml",
      github: "https://github.com/shiho-aoki",
      events: "/events/index.html"
    }
  }
  
  const profile = [
    {
      name: 'overview',
      description: 'skills, licenses and certifications',
      href: urls.profile.overview,
      icon: AtSymbolIcon,
    },
    {
      name: 'academic',
      description: '',
      href: urls.profile.academic,
      icon: AcademicCapIcon,
    },
    { 
        name: 'business',
        description: "",
        href: urls.profile.business,
        icon: CheckIcon 
    }
  ]

  const resources = [
    {
      name: 'Qiita',
      href: urls.other.qiita,
      icon: BookmarkSquareIcon,
    },
    {
      name: 'Zenn',
      href: urls.other.zenn,
      icon: BookmarkSquareIcon,
    },
    {
      name: 'Github',
      href: urls.other.github,
      icon: FingerPrintIcon,
    },
    {
      name: 'Events',
      href: urls.other.events,
      icon: CalendarIcon,
    },
  ]
  </script>