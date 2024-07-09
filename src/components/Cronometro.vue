<template>
    <section class="p-3">
        <strong>{{ tempoDecorrido }}</strong>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CronometroComponent',
    props: {
        tempoEmSegundos: {
            type: Number,
            default: 0,
        },
    },
    computed: {
        // Método computado para calcular o tempo decorrido
        tempoDecorrido(): string {
            return new Date(this.tempoEmSegundos * 1000)
                .toISOString()
                .substr(11, 8); // Formato HH:mm:ss
        },
    },
});
</script>