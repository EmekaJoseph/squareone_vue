<template>
    <StartCompany_template>
        <template #main>
            <button @click="startCompanyStore.currentStage++" class="btn btn-primary">Next..</button>
        </template>

        <template #info>
            <p>
            <div class="fw-bold">
                What are the restrictions on naming my company?
            </div>
            <div>
                Your company name should be unique and not be too similar to any existing company registered
                in Hong Kong. It must end with 'Limited' or ‘有限公司’ for Chinese to signify limited liability
                and should not contain restricted terms or imply government affiliation without permission.
            </div>
            </p>
            <p>
            <div class="fw-bold">
                What are the restrictions on naming my company?
            </div>
            <div>
                Your company name should be unique and not be too similar to any existing company registered
                in Hong Kong. It must end with 'Limited' or ‘有限公司’ for Chinese to signify limited liability
                and should not contain restricted terms or imply government affiliation without permission.
            </div>
            </p>
        </template>
    </StartCompany_template>
</template>
<script lang="ts" setup>
import StartCompany_template from '../StartCompany_template.vue';
import { useStartCompanyStore } from '../stores/StartCompany_store';


const startCompanyStore = useStartCompanyStore()
</script>
<style lang="css" scoped></style>
