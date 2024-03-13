<template>
    <StartCompany_template>
        <template #main>
            <button @click="startCompanyStore.currentStage++" class="btn btn-primary">Next..</button>
        </template>

        <template #info>
            Structure info
        </template>
    </StartCompany_template>
</template>
<script lang="ts" setup>
import StartCompany_template from '../StartCompany_template.vue';
import { useStartCompanyStore } from '../stores/StartCompany_store';

const startCompanyStore = useStartCompanyStore()

</script>
<style lang="css" scoped></style>
