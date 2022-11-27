<template>
    <Header />
    <div class="mx-3 ml-2 pl-10 lg:mt-20 mt-10">
      <img src="https://grass-graph.appspot.com/images/shiho-aoki.png?" 
           class="h-auto w-full object-cover object-center"/>
    </div>
</template>

<script lang="ts">
import Header from '../../components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>