<template>
    <Header />
    <div class="flex justify-center mt-10">
    <div class="grid grid-cols-2 gap-4">
    <!-- <img src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=shiho-aoki&theme=github_dark" 
           class="h-auto w-full object-cover object-center"/> -->
      <div class="col-span-2">
        <img src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=shiho-aoki&theme=github_dark" />
      </div>
      <div>
        <img src="http://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=shiho-aoki&theme=github_dark" />
      </div>
      <div>
        <img src="http://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=shiho-aoki&theme=github_dark&utcOffset=9" />
      </div>
    </div>
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