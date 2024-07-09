<template>
    <div class="is-flex is-align-items-center is-justify-content-flex-start">

        <!-- Passou a variável tempoEmSegundos via prop para receber esse valor no componente -->
        <CronometroComponent :tempoEmSegundos="tempoEmSegundos" />

        <button class="m-3 button" @click="iniciarCronometro" :disabled="cronometroRodando">
            <span class="icon">
                <i class="fas fa-play"></i>
            </span>
            <span>Play</span>
        </button>
        <button class="m-3 button" @click="pararCronometro" :disabled="!cronometroRodando">
            <span class="icon">
                <i class="fa-solid fa-pause"></i>
            </span>
            <span>Pause</span>
        </button>
        <button class="m-3 button" @click="finalizarCronometro" :disabled="!cronometroRodando">
            <span class="icon">
                <i class="fa-solid fa-check"></i>
            </span>
            <span>Finalizar</span>
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CronometroComponent from "./Cronometro.vue";

export default defineComponent({
    name: "TemporizadorComponent",
    emits: ['aoTemporizadorFinalizado'],
    components: {
        CronometroComponent,
    },
    data() {
        return {
            tempoEmSegundos: 0,
            cronometro: 0,
            cronometroRodando: false,
        };
    },
    methods: {
        iniciarCronometro() {
            this.cronometroRodando = true;
            this.cronometro = setInterval(() => {
                this.tempoEmSegundos++; // Incrementando o tempo em segundos
            }, 1000);
        },
        pararCronometro() {
            this.cronometroRodando = false;
            clearInterval(this.cronometro);
        },
        finalizarCronometro() {
            this.cronometroRodando = false;
            clearInterval(this.cronometro);
            this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos); // Emitindo evento para o componente pai
            this.tempoEmSegundos = 0;
        },
    },
});
</script>