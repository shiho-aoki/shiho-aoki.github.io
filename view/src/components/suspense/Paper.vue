<template>
    <div v-for="paperitem in paper" class="pt-1 pb-8 mx-8 mb-10">
           <p class="leading-6 text-gray-900 float-left">
             {{paperitem.id}}.&nbsp;{{paperitem.author}},&nbsp;{{paperitem.title}},
             <i>{{paperitem.publishedBy}}</i>, {{ paperitem.edition}},<b>({{paperitem.number}})</b>, {{paperitem.date}}.
             <small>DOI: <a :href="paperitem.doi" target="_blank" rel="noopener noreferrer">{{paperitem.doi}}</a></small>
           </p>
         </div>
 </template>
 
 <script lang="ts">
 import { defineComponent } from "vue";
 import { rpaper } from '../../middleware/repository' ;
 
 export default defineComponent({
   async setup (){
     const paper =  await rpaper.getAll();
     console.log('paper', paper);
     return {
       paper
     }
   },
   name: 'Paper'
 });
 </script>