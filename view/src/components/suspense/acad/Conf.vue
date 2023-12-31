<template>
    <div v-for="confitem in conf" class="pt-1 pb-8 mx-8 mb-10">
           <p class="leading-6 text-gray-900 float-left">
             {{confitem.id}}.&nbsp;{{confitem.conferencename}}<br/>
             &#009;{{confitem.type}}: {{confitem.title}}<br />
             &#009;{{confitem.presenter}}<br />
             &#009;{{confitem.number}}&nbsp;{{confitem.date}} <br />
           </p>
         </div>
 </template>
 
 <script lang="ts">
 import { defineComponent } from "vue";
 import { rconference } from '../../../middleware/repository' ;
 
 export default defineComponent({
   async setup (){
     const conf =  await rconference.getAll();
     return {
      conf
     }
   },
   name: 'ConfSusp'
 });
 </script>