<template>
        <router-link :to="url" class="panel-link">
            <dt>
            <div class="panel-icon">
                <component :is="iconComponent" class="h-6 w-6" aria-hidden="true" />
            </div>
            <p class="panel-name">
                {{ name }}
                <span v-if="extract==true">
                    <component :is="ExternalLinkIcon" class="h-3 w-3"/>
                </span>
            </p>
            </dt>
            <dd class="panel-discription">
                {{ description }}
            </dd>
        </router-link>
</template>

<script setup lang="ts">
    import { ExternalLinkIcon } from '@heroicons/vue/outline';
    defineProps<{
        name: string,
        description: string,
        iconComponent: any,
        url: string,
        extract: boolean
    }>();
</script>