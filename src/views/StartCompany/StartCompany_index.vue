<template>
    <Structure v-if="startCompanyStore.currentStage == 1" />
    <Name v-if="startCompanyStore.currentStage == 2" />
    <Description v-if="startCompanyStore.currentStage == 3" />
</template>
<script lang="ts" setup>
import { useStartCompanyStore } from './stores/StartCompany_store';
import Name from './pages/Name.vue';
import Structure from './pages/Structure.vue';
import Description from './pages/Description.vue';

const startCompanyStore = useStartCompanyStore()
</script>

<style lang="css" scoped></style>
