<template>
    <ChipGridPanel :data="topNews"/>
    <GridImagePanel />
    <span v-for="i in latestActivity">
        <GridPanel :data="i" />
    </span>
</template>

<script setup lang="ts">
import GridPanel from "../../components/molecules/GridPanel.vue";
import ChipGridPanel from "../../components/molecules/ChipGridPanel.vue";
import GridImagePanel from "../../components/molecules/GridImagePanel.vue";
import { latestActivity } from "../../utils/items/latestActivity";
const topNews = {
        title: "Rustのメモリ管理方法",
        type: "publish" ,
        where:"Qiita",
        date: "2020.12.19",
        summary: '<a href="https://qiita.com/as_pml/items/8a44b6e70cd76d63952a">Rustのメモリ管理方法</a>というタイトルでポインタの歴史〜Rustにおけるメモリ管理とスマートポインタの実装についてまとめました',
}
</script>