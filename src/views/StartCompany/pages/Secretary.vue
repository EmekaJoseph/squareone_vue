<template>
    <StartCompany_template>
        <template #main>
            <section>
                <div class="fw-bolder fs-5">Company Secretary</div>
                <span>Company secretary details</span>
            </section>

            <section class="row g-2">
                <div class="col-md-8">
                    <label class=" fw-bolder">Type</label>
                    <select class="form-select">
                        <option seleted value="corporate">Corporate</option>
                        <option value="individual">Individual</option>
                    </select>
                </div>
                <div class="col-md-8">
                    <label class=" fw-bolder">Name in English</label>
                    <input v-model="form.name" type="text" class="form-control" placeholder="Name in English">
                </div>
                <div class="col-md-8">
                    <label class=" fw-bolder">Name in Chinese</label>
                    <input v-model="form.chn_name" type="text" class="form-control" placeholder="Name in Chinese">
                </div>
                <div class="col-md-8">
                    <label class=" fw-bolder">Company registration no</label>
                    <input v-model="form.company_reg_no" type="text" class="form-control"
                        placeholder="Company registration no">
                </div>
                <div class="col-md-8">
                    <label class=" fw-bolder">Company license no</label>
                    <input v-model="form.licence_no" type="text" class="form-control"
                        placeholder="Company registration no">
                </div>
                <div class="col-md-8">
                    <label class=" fw-bolder">Country registered in</label>
                    <v-select v-model="form.country_registered" :clearable="false"
                        :options="startCompanyStore.countries" />
                </div>
            </section>


            <section>
                <div class="fw-bolder">Address </div>
                <div class="row g-2 mt-1">
                    <div class="col-12">
                        <input v-model="form.address" class="form-control" type="text" placeholder="Flat／Floor／Block">
                    </div>
                    <div class="col-12">
                        <input v-model="form.city" class="form-control" type="text" placeholder="City">
                    </div>
                    <div class="col-12">
                        <input v-model="form.state" class="form-control" type="text" placeholder="State">
                    </div>
                    <div class="col-12">
                        <input v-model="form.postal_code" class="form-control" type="text" placeholder="Postal Code">
                    </div>
                    <div class="col-md-12">
                        <select class="form-select" v-model="form.country">
                            <option selected value="Hong Kong">Hong Kong</option>
                        </select>
                    </div>
                </div>
            </section>


            <div class="movement-buttons my-5">
                <button @click="moveBack" class="btn btn-outline-dark me-3">
                    <i class="bi bi-arrow-left"></i> Back
                </button>
                <button v-if="!form.isSaving" @click="saveAndContinue" class="btn btn-primary">
                    Save & Continue <i class="bi bi-arrow-right"></i>
                </button>
                <button v-else class="btn btn-primary" type="button" disabled>
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Saving, Please wait
                </button>
            </div>
        </template>

        <template #info>

        </template>
    </StartCompany_template>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
import StartCompany_template from '../StartCompany_template.vue';
import { useStartCompanyStore } from '../StartCompany_store';
import api from '@/stores/Helpers/axios'
import { useToast } from 'vue-toast-notification';

import useFxn from '@/stores/Helpers/useFunctions';

const toast = useToast()
const startCompanyStore = useStartCompanyStore()

const form = reactive({
    name: '',
    chn_name: '',
    company_reg_no: '',
    country_registered: 'Hong Kong',
    licence_no: '',
    address: '',
    city: '',
    state: '',
    postal_code: '',
    country: 'Hong Kong',
    isSaving: false
})


function moveBack() {
    // 
}

function saveAndContinue() {
    if (!startCompanyStore.companyInProgress?.id) {
        toast.default('You have not registered any company name', { position: 'top-right' })
        startCompanyStore.switchStage('-', 1)
        return;
    }

    // if (!form.name || !form.chn_name || !form.company_reg_no || !form.licence_no
    //     || !form.email) {
    //     toast.default('Please complete fields', { position: 'top-right' })
    //     return;
    // }

    // const formData = new FormData;
    // formData.append('description', form.description)
    // formData.append('business_nature_id', form.business_nature_id)
    // formData.append('website', form.website)
    // formData.append('company_id', startCompanyStore.companyInProgress.id)

    // form.isSaving = true
    // saveFromToApi(formData)
}

async function saveFromToApi(formData: FormData) {
    try {
        await api.companyDescription(formData)

        toast.success('Data Saved Successfully', { position: 'top-right' });
        form.isSaving = false
        startCompanyStore.switchStage('+')
        startCompanyStore.getCompanyInProgress()

    } catch (error) {
        toast.error('Sorry, Something went wrong', { position: 'top-right' });
    }
}




function switchStage(command: string) {
    startCompanyStore.switchStage(command)
}


</script>
<style lang="css" scoped>
.form-check-label {
    cursor: pointer;
}
</style>
