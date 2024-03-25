import { reactive, ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useStartCompanyForms = defineStore('startCompanyForms', () => {

    const name1 = reactive({
        eng_name: '',
        chn_name: '',
        prefix: 'Limited',
        chn_prefix: '有限公司',
    })

    const name2 = reactive({
        eng_name: '',
        chn_name: '',
        prefix: 'Limited',
        chn_prefix: '有限公司',
    })

    const name3 = reactive({
        eng_name: '',
        chn_name: '',
        prefix: 'Limited',
        chn_prefix: '有限公司',
    })

    const name4 = reactive({
        eng_name: '',
        chn_name: '',
        prefix: 'Limited',
        chn_prefix: '有限公司',
    })

    const name5 = reactive({
        eng_name: '',
        chn_name: '',
        prefix: 'Limited',
        chn_prefix: '有限公司',
    })

    return {
        name1,
        name2,
        name3,
        name4,
        name5,
    }
})
