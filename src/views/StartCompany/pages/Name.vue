<template>
    <StartCompany_template>
        <template #main>
            <section class="section">
                <div class="fw-bolder fs-5">Name</div>
                <span>Enter your preferred company names in order of priority.</span>
            </section>

            <section class="section">
                <div class="fw-bold">Primary Choice</div>
                <div>This is your most preferred company name. Ensure it is the legal name intended for
                    registration.
                </div>

                <div class="row g-2 mt-1">
                    <div class="col-md-6">
                        <input v-model="choice_level1.eng_name" type="text" class="form-control"
                            placeholder="This text for English name">
                    </div>
                    <div class="col-md-6">
                        <select v-model="choice_level1.prefix" class="form-select">
                            <option selected :value="'Limited'">Limited</option>
                            <option :value="'LIMITED'">LIMITED</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <input v-model="choice_level1.chn_name" type="text" class="form-control"
                            placeholder="This text for Chinese name">
                    </div>
                    <div class="col-md-6">
                        <select v-model="choice_level1.chn_prefix" class="form-select">
                            <option selected :value="'有限公司'">有限公司</option>
                        </select>
                    </div>
                </div>
            </section>

            <section class="section" v-if="isSecond">
                <div class="fw-bolder">Secondary Choice</div>
                <div>These are alternative names you would consider should your primary choice be unavailable. List
                    them in descending order of preference.</div>
                <div class="row g-2 mt-1">
                    <div class="col-md-6">
                        <input v-model="choice_level2.eng_name" type="text" class="form-control"
                            placeholder="This text for English name">
                    </div>
                    <div class="col-md-6">
                        <select v-model="choice_level2.prefix" class="form-select">
                            <option selected :value="'Limited'">Limited</option>
                            <option :value="'LIMITED'">LIMITED</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <input v-model="choice_level2.chn_name" type="text" class="form-control"
                            placeholder="This text for Chinese name">
                    </div>
                    <div class="col-md-6">
                        <select v-model="choice_level2.chn_prefix" class="form-select">
                            <option selected :value="'有限公司'">有限公司</option>
                        </select>
                    </div>
                </div>

            </section>

            <section class="section" v-if="isThird">
                <div class="fw-bold">Third Choice</div>
                <div>This is your third choice company name. Ensure it is the legal name intended for
                    registration.
                </div>

                <div class="row g-2 mt-1">
                    <div class="col-md-6">
                        <input v-model="choice_level3.eng_name" type="text" class="form-control"
                            placeholder="This text for English name">
                    </div>
                    <div class="col-md-6">
                        <select v-model="choice_level3.prefix" class="form-select">
                            <option selected :value="'Limited'">Limited</option>
                            <option :value="'LIMITED'">LIMITED</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <input v-model="choice_level3.chn_name" type="text" class="form-control"
                            placeholder="This text for Chinese name">
                    </div>
                    <div class="col-md-6">
                        <select v-model="choice_level3.chn_prefix" class="form-select">
                            <option selected :value="'有限公司'">有限公司</option>
                        </select>
                    </div>
                </div>
            </section>

            <section class="section" v-if="isForth">
                <div class="fw-bold">Fourth Choice</div>
                <div>This is your fourth company name. Ensure it is the legal name intended for
                    registration.
                </div>

                <div class="row g-2 mt-1">
                    <div class="col-md-6">
                        <input v-model="choice_level4.eng_name" type="text" class="form-control"
                            placeholder="This text for English name">
                    </div>
                    <div class="col-md-6">
                        <select v-model="choice_level4.prefix" class="form-select">
                            <option selected :value="'Limited'">Limited</option>
                            <option :value="'LIMITED'">LIMITED</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <input v-model="choice_level4.chn_name" type="text" class="form-control"
                            placeholder="This text for Chinese name">
                    </div>
                    <div class="col-md-6">
                        <select v-model="choice_level4.chn_prefix" class="form-select">
                            <option selected :value="'有限公司'">有限公司</option>
                        </select>
                    </div>
                </div>
            </section>

            <section class="section" v-if="isFifth">
                <div class="fw-bold">Fifth Choice</div>
                <div>This is your fifth company name. Ensure it is the legal name intended for
                    registration.
                </div>
                <div class="row g-2 mt-1">
                    <div class="col-md-6">
                        <input v-model="choice_level5.eng_name" type="text" class="form-control"
                            placeholder="This text for English name">
                    </div>
                    <div class="col-md-6">
                        <select v-model="choice_level5.prefix" class="form-select">
                            <option selected :value="'Limited'">Limited</option>
                            <option :value="'LIMITED'">LIMITED</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <input v-model="choice_level5.chn_name" type="text" class="form-control"
                            placeholder="This text for Chinese name">
                    </div>
                    <div class="col-md-6">
                        <select v-model="choice_level5.chn_prefix" class="form-select">
                            <option selected :value="'有限公司'">有限公司</option>
                        </select>
                    </div>
                </div>
            </section>

            <div>
                <button v-if="isSecond || isThird || isForth || isFifth" @click="removeForm"
                    class="btn btn-outline-danger me-3">
                    <i class="bi bi-x-circle"></i> Remove
                </button>
                <button :disabled="isThird && isForth && isFifth" @click="addForm" class="btn btn-outline-secondary">
                    <i class="bi bi-plus-circle"></i> Add another name
                </button>
            </div>

            <div class="movement-buttons my-5">
                <button @click="moveBack" class="btn btn-outline-dark me-3">
                    <i class="bi bi-arrow-left"></i> Back
                </button>
                <button v-if="!isSaving" @click="saveAndContinue" class="btn btn-primary">
                    Save & Continue <i class="bi bi-arrow-right"></i>
                </button>

                <button v-else class="btn btn-primary" type="button" disabled>
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Saving, Please wait
                </button>

            </div>

        </template>

        <template #info>
            <section class="section">
                <div class="fw-bold">
                    What are the restrictions on naming my company?
                </div>
                <div>
                    Your company name should be unique and not be too similar to any existing company registered
                    in Hong Kong. It must end with 'Limited' or ‘有限公司’ for Chinese to signify limited liability
                    and should not contain restricted terms or imply government affiliation without permission.
                </div>
            </section>
            <section class="section">
                <div class="fw-bold">
                    Can I include both English and Chinese in my company name?
                </div>
                <div>

                    Yes, you can register a name in English, Chinese, or both. However, the Chinese name must not be a
                    direct translation of the English name and only Traditional Chinese characters are accepted by the
                    Hong
                    Kong Companies Registry.
                </div>
            </section>
            <section class="section">
                <div class="fw-bold">
                    What should I do if my preferred company name is already taken?
                </div>
                <div>
                    It's advisable to have alternative names ready. You can prioritize your preferred names when filling
                    out this form, and we will register in order of preference. If all listed names are taken, you will
                    be contacted to provide additional names.
                </div>
            </section>
        </template>
    </StartCompany_template>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue';
import StartCompany_template from '../StartCompany_template.vue';
import { useStartCompanyStore } from '../StartCompany_store';
import { useToast } from 'vue-toast-notification';
import api from '@/stores/Helpers/axios'
import { nameForm } from './formsStore/Name';
import { storeToRefs } from 'pinia';

const toast = useToast()
const startCompanyStore = useStartCompanyStore()

const form = nameForm()
const { choice_level1,
    choice_level2,
    choice_level3,
    choice_level4,
    choice_level5,
    isSecond,
    isThird,
    isForth,
    isFifth,
    isSaving,
} = storeToRefs(form)

onMounted(() => {
    const choiceNames = startCompanyStore.companyInProgress?.names ?? []
    if (choiceNames.length) {

        const level1 = choiceNames.find((x: any) => x.choice_level == 1);
        if (level1) {
            choice_level1.value.eng_name = level1.eng_name.split(' ')[0]
            choice_level1.value.prefix = level1.eng_name.split(' ')[1]
            choice_level1.value.chn_name = level1.chn_name.split(' ')[0]
            choice_level1.value.chn_prefix = level1.chn_name.split(' ')[1]
        }

        const level2 = choiceNames.find((x: any) => x.choice_level == 2);
        if (level2) {
            isSecond.value = true
            choice_level2.value.eng_name = level2.eng_name.split(' ')[0]
            choice_level2.value.prefix = level2.eng_name.split(' ')[1]
            choice_level2.value.chn_name = level2.chn_name.split(' ')[0]
            choice_level2.value.chn_prefix = level2.chn_name.split(' ')[1]
        }

        const level3 = choiceNames.find((x: any) => x.choice_level == 3);
        if (level3) {
            isThird.value = true
            choice_level3.value.eng_name = level3.eng_name.split(' ')[0]
            choice_level3.value.prefix = level3.eng_name.split(' ')[1]
            choice_level3.value.chn_name = level3.chn_name.split(' ')[0]
            choice_level3.value.chn_prefix = level3.chn_name.split(' ')[1]
        }

        const level4 = choiceNames.find((x: any) => x.choice_level == 4);
        if (level4) {
            isForth.value = true
            choice_level4.value.eng_name = level4.eng_name.split(' ')[0]
            choice_level4.value.prefix = level4.eng_name.split(' ')[1]
            choice_level4.value.chn_name = level4.chn_name.split(' ')[0]
            choice_level4.value.chn_prefix = level4.chn_name.split(' ')[1]
        }

        const level5 = choiceNames.find((x: any) => x.choice_level == 5);
        if (level5) {
            isFifth.value = true
            choice_level5.value.eng_name = level5.eng_name.split(' ')[0]
            choice_level5.value.prefix = level5.eng_name.split(' ')[1]
            choice_level5.value.chn_name = level5.chn_name.split(' ')[0]
            choice_level5.value.chn_prefix = level5.chn_name.split(' ')[1]
        }
    }
})


function addForm() {
    for (const field of [isSecond, isThird, isForth, isFifth]) {
        if (!field.value) {
            field.value = true;
            return;
        }
    }
}

function removeForm() {
    for (const field of [isFifth, isForth, isThird, isSecond]) {
        if (field.value) {
            field.value = false;
            return;
        }
    }
}

function moveBack() {
    startCompanyStore.switchStage('-')
}

function saveAndContinue() {

    if (checkFields(choice_level1.value, 'choice_level1')) return;
    if (isSecond.value && checkFields(choice_level2.value)) return;
    if (isThird.value && checkFields(choice_level3.value)) return;
    if (isForth.value && checkFields(choice_level4.value)) return;
    if (isFifth.value && checkFields(choice_level5.value)) return;

    const formData = new FormData()

    formData.append('company_id', startCompanyStore.companyInProgress?.id ?? '')

    formData.append('names[0][eng_name]', choice_level1.value.eng_name)
    formData.append('names[0][prefix]', choice_level1.value.prefix)
    formData.append('names[0][chn_name]', choice_level1.value.chn_name)
    formData.append('names[0][chn_prefix]', choice_level1.value.chn_prefix)
    formData.append('names[0][choice_level]', '1')

    const levels = [
        { level: choice_level2, index: 1 },
        { level: choice_level3, index: 2 },
        { level: choice_level4, index: 3 },
        { level: choice_level5, index: 4 }
    ];

    for (const { level, index } of levels) {
        if (isSecond.value && index === 1 || isThird.value && index === 2 || isForth.value && index === 3 || isFifth.value && index === 4) {
            formData.append(`names[${index}][eng_name]`, level.value.eng_name);
            formData.append(`names[${index}][prefix]`, level.value.prefix);
            formData.append(`names[${index}][chn_name]`, level.value.chn_name);
            formData.append(`names[${index}][chn_prefix]`, level.value.chn_prefix);
            formData.append(`names[${index}][choice_level]`, `${(index + 1)}`);
        }
    }

    // for (var pair of formData.entries()) {
    //     console.log(pair[0] + ', ' + pair[1]);
    // }

    isSaving.value = true
    saveFromToApi(formData)
}

function checkFields(level: any, msg?: string) {
    const message = msg ? 'Please fill Primary Choice Names' : 'Please complete fields'
    if (!level.eng_name || !level.chn_name || !level.chn_prefix) {
        toast.default(message, { position: 'top-right' });
        return true;
    }
    return false;
}

async function saveFromToApi(formData: FormData) {
    try {
        await api.registerCompany(formData)
        toast.success('Data Saved Successfully', { position: 'top-right' });
        isSaving.value = false
        // startCompanyStore.switchStage('+')
        startCompanyStore.getCompanyInProgress()

    } catch (error) {
        toast.error('Sorry, Something went wrong', { position: 'top-right' });
        isSaving.value = false
    }
}

</script>
<style lang="css" scoped></style>
