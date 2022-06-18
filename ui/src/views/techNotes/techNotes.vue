<template>
    <SideBar />
    <div class="p-2 lg:ml-80 portrait:ml-8">
        <MainViewer />
    </div>
</template>

<script lang="ts">
import SideBar from "../../components/molecules/SideBar.vue";
import MainViewer from "../../components/molecules/MainViewer.vue";

export default {
    name: "techNotes",
    // watch: {
    //     mainview: function(){
            
    //     }
    // },
    components: {
        SideBar,MainViewer,
    }
}
</script>