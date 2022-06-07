<template>
    <SideBar />
    <div class="lg:ml-80 portrait:ml-10">
      <PageTitle title="Tech Note" />
    </div>
</template>

<script lang="ts">
// @ is an alias to /src
import PageTitle from "../../components/PageTitle.vue";
import SideBar from "../../components/SideBar.vue";
import NoteMainView from "../../components/NoteMainView.vue";

export default {
  name: "TechNotes",
  components: {
    PageTitle: PageTitle,
    SideBar: SideBar,
    NoteMainView: NoteMainView
  },
};
</script>