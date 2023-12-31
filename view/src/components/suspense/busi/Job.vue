<template>
    <JobPanel :edudata="jobs" :end="end" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import JobPanel from '../../core/JobsPanel.vue';
import { rjob } from '../../../middleware/repository' ;
import { IJob } from '../../../middleware/db/interface';


export default defineComponent({
  async setup (){
    const jobs = await rjob.getAll() as IJob[];
    const end = "Currentry working as systems Engineer, product Manager and Chief Technology Officer"
    return {
        jobs, end
    }
  },
  name: 'JobSubs',
  components: {
    JobPanel
  }
});
</script>