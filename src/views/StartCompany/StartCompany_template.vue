<template>
    <div class="side-panel"></div>
    <div class="main-panel shadow-sm">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 p-lg-3 p-2 shadow-sm head-panel">
                    Start your Company
                </div>
                <div class="col-2 d-none d-md-block sub-panel sub-menu-panel" style="background-color: #F5F9FC;">
                    <ul class="list-group list-group-flush mt-4">
                        <li v-for="menu in startCompanyStore.menus" class="list-group-item"
                            :class="{ 'isActive': startCompanyStore.isActiveMenu(menu.stage) }">
                            {{ menu.name }}
                        </li>
                    </ul>
                </div>
                <div class="col-md-7 bg-white sub-panel sub-form-panel pt-4">
                    <slot name="main"></slot>
                </div>
                <div class="col-3 d-none d-md-block sub-panel sub-info-panel p-3 pt-4 small">
                    <slot name="info"></slot>

                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useStartCompanyStore } from './stores/StartCompany_store';

const startCompanyStore = useStartCompanyStore()
</script>

<style lang="css" scoped>
.side-panel {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 50px !important;
    background-color: #212935;
    overflow-y: auto;
}

.main-panel {
    background-color: #fff;
    min-height: 100vh;
    margin: 25px 25px 25px 75px;
}

.head-panel {
    background-color: #F5F9FC;
    border-bottom: 1px solid #d5dae5;
    z-index: 10;
}

.sub-panel {
    min-height: 100vh;
}

.sub-info-panel {
    background-color: #F5F9FC;
}

.list-group-item {
    background: transparent;
    border: none;
    border-left: 1px solid #E2E3E5;
    font-weight: 400;
    padding-block: 4px;
}

.isActive {
    color: var(--primary-color) !important;
    border-color: var(--primary-color);
}
</style>
