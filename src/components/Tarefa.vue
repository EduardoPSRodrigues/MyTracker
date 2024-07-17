<template>
    <Box>
        <div class="columns">
            <div class="column is-7 ">
                {{ tarefa.descricao || 'Tarefa sem descrição' }}
            </div>

            <div class="column resetCSS">
                <CronometroComponent :tempoEmSegundos="tarefa.duracaoEmSegundos" />
            </div>
        </div>
    </Box>
</template>

<script lang="ts">
//PropType é uma função que é usada para definir o tipo de uma propriedade em um componente Vue.
import { defineComponent, PropType } from 'vue'; //
import CronometroComponent from './Cronometro.vue';
import ITarefa from '@/interfaces/ITarefa';
import Box from './Box.vue';

export default defineComponent({
    name: 'TarefaComponent',
    components: {
        CronometroComponent, 
        Box
    },
    props: {
        // O tipo de propriedade é um objeto que segue a interface ITarefa
        tarefa: {
            type: Object as PropType<ITarefa>,
            required: true,
        },
        tempoEmSegundos: {
            type: Number,
            default: 0,
        },
    },
});
</script>

<style scoped>
.resetCSS  {
    padding: 0;
    align-self: center;
    margin-left: 6px;
}
</style>