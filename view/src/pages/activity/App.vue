<template>
    <Header />
    <div class="mx-3 ml-2 pl-10 lg:mt-20 mt-10 flex">
      <!-- <img src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=shiho-aoki&theme=github_dark" 
           class="h-auto w-full object-cover object-center"/> -->
    <img src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=shiho-aoki&theme=github_dark" />
    <img src="http://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=shiho-aoki&theme=github_dark" />
    <img src="http://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=shiho-aoki&theme=github_dark&utcOffset=9" />
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