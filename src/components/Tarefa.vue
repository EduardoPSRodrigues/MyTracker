<template>
    <div class="box has-text-weight-bold">
        <div class="columns">
            <div class="column is-7">
                Descrição da Tarefa
            </div>

            <div class="column">
                <CronometroComponent :tempoEmSegundos="tempoEmSegundos" />
            </div>

        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CronometroComponent from './Cronometro.vue';

export default defineComponent({
    name: 'TarefaComponent',
    components: {
        CronometroComponent,
    },
    props: {
        tempoEmSegundos: {
            type: Number,
            default: 0,
        },
    },
});
</script>

<style scoped>
.box {
    background-color: #FAF0CA
}
</style>