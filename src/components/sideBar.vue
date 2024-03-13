<template>
    <div class="sidebar">
        <div class="accordion bg-transparent" id="accordionMenu">
            <div class="accordion-item">
                <h2 class="accordion-header" id="menu1Heading">
                    <button class="accordion-button bg-transparent" type="button" data-bs-toggle="collapse"
                        data-bs-target="#menu1Collapse" aria-expanded="true" aria-controls="menu1Collapse">
                        Menu 1
                    </button>
                </h2>
                <div id="menu1Collapse" class="accordion-collapse collapse show" aria-labelledby="menu1Heading"
                    data-bs-parent="#accordionMenu">
                    <div class="accordion-body">
                        <ul class="nav flex-column">
                            <li class="nav-item"><a class="nav-link" href="#">Sub Menu 1</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Sub Menu 2</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter()

</script>

<style scoped>
.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 250px !important;
    border-right: 1px solid #cccccc44;
    background-color: #212935;
    overflow-y: auto;
}

.accordion-button {
    border: none;
    /* Remove border */
    box-shadow: none;
    /* Remove shadow */
}

.accordion-button:focus {
    outline: none;
    /* Remove outline on focus */
}

.accordion-item {
    background: transparent;
    border: none !important;
}

.accordion-button::after {
    color: red !important;
    /* Set arrow color */
}


@media (max-width: 767px) {
    .sidebar {
        display: none;
    }
}
</style>
