<template>
    <dl v-for="(item, index) in LicensesAndCertifications" class="license-table">
        <Table :title="item.name" :discription="item.discription" :colurPicker="index%2===0" />
    </dl>
</template>

<script setup lang="ts">
import { LicensesAndCertifications } from '../../../utils/items/profile';
</script>

<script lang="ts">
    import Table from '../../../components/atoms/table.vue';

    export default {
        name: 'Licese',
        components: {
            Table
        }
    }
</script>