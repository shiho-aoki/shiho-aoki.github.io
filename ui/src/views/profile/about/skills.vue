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
      src : '/src/assets/img/lang/go.png',
      star: "★★★★☆"
    },
    {
      id: 20,
      title: "TypeScript",
      src : '/src/assets/img/lang/ts.png',
      star: "★★★★☆"
    },
    {
      id: 30,
      title: "GCP",
      src : '/src/assets/img/lang/gcp.png',
      star: "★★★★☆"
    },
    {
      id: 40,
      title: "C++",
      src : '/src/assets/img/lang/Cpp.png',
      star: "★★★★★"
    },
    {
      id: 50,
      title: "React(Typescript)",
      src : '/src/assets/img/lang/react.png',
      star: "★★★★★"
    },
  ],
  "Common Use": [
    {
      id: 10,
      title: 'Golang',
      src : '/src/assets/img/lang/go.png',
      star: "★★★★☆",
    },
    {
      id: 20,
      title: 'C++',
      src : '/src/assets/img/lang/Cpp.png',
      star: "★★★★★",
    },
    {
      id: 30,
      title: 'Rust',
      src : '/src/assets/img/lang/rust.png',
      star: "★★★☆☆",

    },
    {
      id: 40,
      title: 'python',
      src : '/src/assets/img/lang/python.png',
      star: "★★★★★",
    },
    {
      id: 50,
      title: 'TenserFlow',
      src : '/src/assets/img/lang/tf.png',
      star: "★★★☆☆",

    },
    {
      id: 60,
      title: 'Ruby',
      src : '/src/assets/img/lang/ruby.png',
      star: "★★★☆☆",
    },
    {
      id: 70,
      title: 'Ruby on Rails',
      src : '/src/assets/img/lang/rails.png',
      star: "★★★★☆",

    },
    {
      id: 80,
      title: 'JavaScript',
      src : '/src/assets/img/lang/js.png',
      star: "★★★★★",
    },
    {
      id: 90,
      title: 'TypeScript',
      src : '/src/assets/img/lang/ts.png',
      star: "★★★★☆",

    },
    {
      id: 100,
      title: 'React',
      src : '/src/assets/img/lang/react.png',
      star: "★★★★☆",
    },
    {
      id: 110,
      title: 'NEXT.JS',
      src : '/src/assets/img/lang/next.png',
      star: "★★★★☆",

    },
    {
      id: 120,
      title: 'Vue',
      src : '/src/assets/img/lang/vue.png',
      star: "★★★☆☆",
    },
    {
      id: 130,
      title: 'Nuxt.JS',
      src : '/src/assets/img/lang/nuxt.png',
      star: "★★☆☆☆",

    },
    {
      id: 140,
      title: 'SCSS',
      src : '/src/assets/img/lang/scss.png',
      star: "★★★★☆",
    },
    {
      id: 150,
      title: 'PostgreSQL',
      src : '/src/assets/img/lang/Postgresql.png',
      star: "★★★☆☆",

    },
    {
      id: 160,
      title: 'Git',
      src : '/src/assets/img/lang/git.png',
      star: "★★★★★",
    },
        {
      id: 170,
      title: 'Docker',
      src : '/src/assets/img/lang/docker.png',
      star: "★★★★★",
    },
    {
      id: 180,
      title: 'Google Cloud Platform (gcp)',
      src : '/src/assets/img/lang/gcp.png',
      star: "★★★★☆",
    },
    {
      id: 190,
      title: 'Amazon Web Services (aws)',
      src : '/src/assets/img/lang/aws.png',
      star: "★★★☆☆",
    },
    {
      id: 200,
      title: 'NGINX',
      src : '/src/assets/img/lang/nginx.png',
      star: "★★★★☆",
    },
    {
      id: 210,
      title: 'Ubuntu',
      src : '/src/assets/img/lang/ubuntu.png',
      star: "★★★★☆",
    },


  ],
  "Training and Interest": [
    {
      id: 10,
      title: 'Common Lisp',
      src : '/src/assets/img/lang/commonlisp.png',
      star: "★★☆☆☆",
    },
    {
      id: 20,
      title: "ERLANG",
      src : '/src/assets/img/lang/Erlang.png',
      star: "★★★☆☆",
    },
    {
      id: 30,
      title: 'Elixir',
      src : '/src/assets/img/lang/elixir.png',
      star: "★☆☆☆☆",

    },
    {
      id: 40,
      title: 'Apache HTTP Server',
      src : '/src/assets/img/lang/apache.png',
      star: "★★★☆☆",
    },
  ],
})
</script>