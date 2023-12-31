<template>
    <EducationPanel :edudata="schools" :end="end" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import EducationPanel from "../../core/EducationPanel.vue";
import { redu } from '../../../middleware/repository' ;
import { IEducation } from '../../../middleware/db/interface';


export default defineComponent({
  async setup (){
    const schools = await redu.getAll() as IEducation[];
    const end = ""
    return {
      schools, end
    }
  },
  name: 'EducationSusp',
  components: {
    EducationPanel
  }
});
</script>