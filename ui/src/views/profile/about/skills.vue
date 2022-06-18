<template>
  <div class="w-full sm:px-0">
    <TabGroup>
      <TabList class="flex space-x-1 bg-gray-400 p-1">
        <Tab
          v-for="category in Object.keys(categories)"
          as="template"
          :key="category"
          v-slot="{ selected }"
        >
          <button
            :class="[
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-700',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-gray-400 focus:outline-none focus:ring-1',
              selected
                ? 'bg-white shadow'
                : 'text-gray-600 hover:bg-white/[0.12] hover:text-gray-400',
            ]"
          >
            {{ category }}
          </button>
        </Tab>
      </TabList>

      <TabPanels class="mt-0 mb-5 border-solid border-2 border-gray-400 rounded-md">
        <TabPanel
          v-for="(posts, idx) in Object.values(categories)"
          :key="idx"
          :class="[
            'bg-white p-3',
            'ring-white ring-opacity-60 ring-offset-2 ring-offset-gray-400 focus:outline-none focus:ring-1 items-center',
          ]"
        >
          <ul class="flex flex-wrap">
            <li
              v-for="post in posts"
              :key="post.id"
              class="relative rounded-md p-3 hover:bg-gray-100" 
            >   
                <div class="w-64 h-64 px-12 py-14 bg-white aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-64 lg:aspect-h-1">
                    <img :src="post.src" class="w-full h-full object-center lg:w-full lg:h-full" />
                </div>
                <div class="mt-4 flex justify-between">
                    <div>
                    <h3 class="text-lg font-medium leading-5">
                    {{ post.title }}
                    </h3>
                    <p class="mt-1 text-sm text-gray-500">{{ post.star }}</p>
                    </div>
                    <!-- <p class="text-sm font-medium text-gray-900">{{ product.price }}</p> -->
                </div>
                <!-- <li>{{ post. }}</li>
                <li>&middot;</li>
                <li>{{ post. }} comments</li>
                <li>&middot;</li> -->
            </li>
          </ul>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

const categories = ref({
  "Recent": [
    {
      id: 10,
      title: 'Golang',
      src : '/img/lang/go.png',
      star: "★★★★☆"
    },
    {
      id: 20,
      title: "TypeScript",
      src : '/img/lang/ts.png',
      star: "★★★★☆"
    },
    {
      id: 30,
      title: "GCP",
      src : '/img/lang/gcp.png',
      star: "★★★★☆"
    },
    {
      id: 40,
      title: "C++",
      src : '/img/lang/Cpp.png',
      star: "★★★★★"
    },
    {
      id: 50,
      title: "React(Typescript)",
      src : '/img/lang/react.png',
      star: "★★★★★"
    },
  ],
  "Common Use": [
    {
      id: 10,
      title: 'Golang',
      src : '/img/lang/go.png',
      star: "★★★★☆",
    },
    {
      id: 20,
      title: 'C++',
      src : '/img/lang/Cpp.png',
      star: "★★★★★",
    },
    {
      id: 30,
      title: 'Rust',
      src : '/img/lang/rust.png',
      star: "★★★☆☆",

    },
    {
      id: 40,
      title: 'python',
      src : '/img/lang/python.png',
      star: "★★★★★",
    },
    {
      id: 50,
      title: 'TenserFlow',
      src : '/img/lang/tf.png',
      star: "★★★☆☆",

    },
    {
      id: 60,
      title: 'Ruby',
      src : '/img/lang/ruby.png',
      star: "★★★☆☆",
    },
    {
      id: 70,
      title: 'Ruby on Rails',
      src : '/img/lang/rails.png',
      star: "★★★★☆",

    },
    {
      id: 80,
      title: 'JavaScript',
      src : '/img/lang/js.png',
      star: "★★★★★",
    },
    {
      id: 90,
      title: 'TypeScript',
      src : '/img/lang/ts.png',
      star: "★★★★☆",

    },
    {
      id: 100,
      title: 'React',
      src : '/img/lang/react.png',
      star: "★★★★☆",
    },
    {
      id: 110,
      title: 'NEXT.JS',
      src : '/img/lang/next.png',
      star: "★★★★☆",

    },
    {
      id: 120,
      title: 'Vue',
      src : '/img/lang/vue.png',
      star: "★★★☆☆",
    },
    {
      id: 130,
      title: 'Nuxt.JS',
      src : '/img/lang/nuxt.png',
      star: "★★☆☆☆",

    },
    {
      id: 140,
      title: 'SCSS',
      src : '/img/lang/scss.png',
      star: "★★★★☆",
    },
    {
      id: 150,
      title: 'PostgreSQL',
      src : '/img/lang/Postgresql.png',
      star: "★★★☆☆",

    },
    {
      id: 160,
      title: 'Git',
      src : '/img/lang/git.png',
      star: "★★★★★",
    },
        {
      id: 170,
      title: 'Docker',
      src : '/img/lang/docker.png',
      star: "★★★★★",
    },
    {
      id: 180,
      title: 'Google Cloud Platform (gcp)',
      src : '/img/lang/gcp.png',
      star: "★★★★☆",
    },
    {
      id: 190,
      title: 'Amazon Web Services (aws)',
      src : '/img/lang/aws.png',
      star: "★★★☆☆",
    },
    {
      id: 200,
      title: 'NGINX',
      src : '/img/lang/nginx.png',
      star: "★★★★☆",
    },
    {
      id: 210,
      title: 'Ubuntu',
      src : '/img/lang/ubuntu.png',
      star: "★★★★☆",
    },


  ],
  "Training and Interest": [
    {
      id: 10,
      title: 'Common Lisp',
      src : '/img/lang/commonlisp.png',
      star: "★★☆☆☆",
    },
    {
      id: 20,
      title: "ERLANG",
      src : '/img/lang/Erlang.png',
      star: "★★★☆☆",
    },
    {
      id: 30,
      title: 'Elixir',
      src : '/img/lang/elixir.png',
      star: "★☆☆☆☆",

    },
    {
      id: 40,
      title: 'Apache HTTP Server',
      src : '/img/lang/apache.png',
      star: "★★★☆☆",
    },
  ],
})
</script>