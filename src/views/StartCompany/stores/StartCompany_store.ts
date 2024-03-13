import { reactive, ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useStartCompanyStore = defineStore('startCompanyStore', () => {
    const currentStage = ref<number>(2)
    const isActiveMenu = (stage: number) => currentStage.value == stage

    const menus = [
        { stage: 1, name: 'Structure' },
        { stage: 2, name: 'Name' },
        { stage: 3, name: 'Description' },
        { stage: 4, name: 'Address' },
        { stage: 5, name: 'Founders/Directors' },
        { stage: 6, name: 'Ownership' },
        { stage: 7, name: 'Founders/Directors' },
        { stage: 8, name: 'Company Secretary' },
        { stage: 9, name: 'Source' },
        { stage: 10, name: 'Activities' },
        { stage: 11, name: 'Sign' },
        { stage: 12, name: 'Pay' },
    ]

    function swithStage(command: string) {
        if (command == '+') currentStage.value++
        else currentStage.value--
        window.scrollTo(0, 0)
    }

    return {
        currentStage,
        menus,
        isActiveMenu,
        swithStage
    }
})
