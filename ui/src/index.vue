<template>
    <Header />
    <router-view />
</template>

<script lang='ts'>
import Header from './components/globals/header.vue';

export default {
    name: 'App',
    components: {
        Header,
    }
};
</script>