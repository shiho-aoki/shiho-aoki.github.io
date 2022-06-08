<template>
  <div class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">I want to be an indehacker</h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">shiho-aoki @as.+?pml</p>
        <p class="mt-3 max-w-2xl text-xl text-gray-900 lg:mx-auto">If I have seen further it is by standing on yᵉ sholders of Giants.</p>
        <p class="mt-1 max-w-2xl text-xl text-gray-500 lg:mx-auto">Experienced Software Engineer with a demonstrated history of working in the higher education industry. Skilled in Python (Programming Language), JavaScript (React, Angular), Golang ,and Google Cloud Platform etc. Engineering professional with a Bachelor of Science - BS focused in Biomedical/Medical Engineering from Waseda University.</p>
      </div>

      <div class="mt-10">
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <a v-for="feature in features" :key="feature.name" class="relative border-2 p-2 rounded-md" :href="feature.url">
            <dt>
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <component :is="feature.icon" class="h-6 w-6" aria-hidden="true" />
              </div>
              <p class="flex ml-16 text-lg leading-6 font-medium text-gray-900">
                {{ feature.name }}
                <span v-if="feature.extract==true">
                  <component :is="ExternalLinkIcon" class="h-3 w-3"/>
                </span>
              </p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              {{ feature.description }}
            </dd>
          </a>
        </dl>
      </div>
    </div>
  </div>

  <PageMiddleTitle title="Licenses and Certifications" discription="TODO; add discriotion or summary" :componentProp="Licence" />
  <PageMiddleTitle title="Skills" discription="TODO; add discriotion or summary" :componentProp="Skills" />

</template>

<script setup lang="ts">
import { BeakerIcon, BriefcaseIcon, BookOpenIcon, ChipIcon, ExternalLinkIcon } from '@heroicons/vue/outline';

const features = [
  {
    name: 'Academic',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: BeakerIcon,
    url: "/about/academic",
    extract: false,
  },
  {
    name: 'Business Experience',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: BriefcaseIcon,
    url: "/about/work",
    extract: false,
  },
  {
    name: 'Zenn',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: BookOpenIcon,
    url: "",
    extract: true,
  },
  {
    name: 'GitHub',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ChipIcon,
    url: "",
    extract: true,
  },
]
</script>

<script lang="ts">
import PageMiddleTitle from "../../components/PageMiddleTitle.vue";
import Licence from "./About/Licence.vue";
import Skills from "./About/Skills.vue";

export default {
  name: "About",
  components:{ PageMiddleTitle, Licence, Skills }
}
</script>