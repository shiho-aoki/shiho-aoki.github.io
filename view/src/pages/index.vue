<template>
  <Layer pageTitle="shiho-aoki" />
  <ProfileView />
</template>


<script lang="ts">
import { defineComponent } from "vue";

import Layer from "../components/globals/layer.vue";
import ProfileView from "../components/views/ProfileView.vue";

export default defineComponent({
  name: 'Profile',
  components: {
    Layer,
    ProfileView
  }
});
</script>