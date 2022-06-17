<template>
    <Header :navItems='navItems' :profItems='profItems' />
    <router-view />
</template>

<script lang='ts'>
import Header from './components/globals/header.vue';
import { navItems, profItems } from './utils/items/header';

export default {
    name: 'App',
    data(){
        return{
            navItems, profItems
        }
    },
    components: {
        Header
    }
};
</script>