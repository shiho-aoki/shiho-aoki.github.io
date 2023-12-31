<template>
    <InternshipPanel :edudata="intern" :end="end" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import InternshipPanel from "../../core/InternshipPanel.vue";
import { rinternship } from '../../../middleware/repository' ;
import { IInternship } from '../../../middleware/db/interface';


export default defineComponent({
  async setup (){
    const intern = await rinternship.getAll() as IInternship[];
    const end = ""
    return {
        intern, end
    }
  },
  name: 'InternshipSubs',
  components: {
    InternshipPanel
  }
});
</script>