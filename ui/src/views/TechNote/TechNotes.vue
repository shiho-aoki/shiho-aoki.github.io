<template>
    <SideBar class="portrait:hidden" :subItems="SidebarItems" />
    <div class="p-2 lg:ml-80 portrait:ml-8">
      <NoteMainView :mainItem="onlyMainItemsForTopMainView" />
    </div>
</template>

<script setup lang="ts">

const onlyMainItemsForTopMainView = [
  {
    itemName: "Vue",
    itemULR: "#"
  },
    {
    itemName: "Vue2",
    itemULR: "#"
  }
]

const subItemList = [ 
  {
    itemName: "data1",
    itemURL: "#"
  },
  {
    itemName: "data2",
    itemURL: "#"
  },
  {
    itemName: "data3",
    itemURL: "#"
  }
]
const SidebarItems = [
  {
    mainItem: "Vue",
    mainItemURL: "#",
    subItems: subItemList
  },
  {
    mainItem: "Vue2",
    mainItemURL: "#",
    subItems: subItemList
  }
]
</script>

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