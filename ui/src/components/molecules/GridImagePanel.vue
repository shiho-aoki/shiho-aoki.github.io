<template>
    <div class="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8">
      <div class="max-w-2xl mx-auto py-9 lg:max-w-none">
        <div class="mt-2 space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
          <div v-for="callout in callouts" :key="callout.name" class="group relative">
            <div class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
              <img :src="callout.imageSrc" :alt="callout.imageAlt" class="w-4/5 h-4/5 object-center object-cover" />
            </div>
            <h3 class="mt-6 text-sm text-gray-500">
                <span class="absolute inset-0" />
                {{ callout.name }}
            </h3>
            <p class="text-base font-semibold text-gray-900">{{ callout.description }}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
const callouts = [
  {
    name: '最近気にってる子、近日中にノート出そうなかーなどと',
    description: 'Rust',
    imageSrc: '/img/lang/rust.png',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
  },
  {
    name: '試験近いから勉強しないとな子',
    description: 'AWS',
    imageSrc: '/img/lang/aws.png',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
  },
  {
    name: '結構つついてるはずがいまだにん？ってなる子',
    description: 'Commond Lisp',
    imageSrc: '/img//lang/commonlisp.png',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
  },
]
</script>