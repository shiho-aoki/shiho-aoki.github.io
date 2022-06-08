<script setup lang="ts">
    import { ref, reactive } from 'vue'
    defineProps<{subItems: any}>();
</script>

<template>
    <div class="fixed inset-y-0 left-0 flex max-w-full pl-0 mt-12 pt-4">
        <div class="pointer-events-auto relative w-80 max-w-sm">
            <div class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                <div class="px-4 sm:px-6">
                    <h1 class="text-lg font-extrabold text-gray-800"> 
                        Tech Note
                    </h1>
                </div>
                <div class="relative mt-1 flex-1 px-4 sm:px-6">
                    <!-- Replace with your content -->
                    <div class="absolute inset-0 px-4 sm:px-6">
                        <div class="h-full" aria-hidden="true">
                            <ul v-for="item in subItems" class="mt-2 text-gray-600">
                                <li class="font-sans text-base font-bold">
                                    <a :href="item.mainItemURL">{{item.mainItem}}</a>
                                </li>
                                <li class="indent-2.5 font-sans text-sm leading-7" v-for="subitem in item.subItems">
                                    <li><a :href="subitem.itemURL">{{subitem.itemName}}</a></li>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- /End replace -->
                </div>
            </div>
        </div>
    </div>
</template>