<template>
    <section class="is-flex is-align-items-center is-justify-content-center is-flex-wrap-wrap">

        <!-- Passou a variável tempoEmSegundos via prop para receber esse valor no componente -->
        <div class="column is-narrow">
        <CronometroComponent :tempoEmSegundos="tempoEmSegundos" />
    </div>

    <!-- <div class="column is-narrow"></div>
    <div class="column is-narrow"> </div>
    <div class="column is-narrow"> </div> -->
        
    <Botao class="is-success" @clicado="iniciarCronometro" icone="fas fa-play" texto="Play" :desabilitado="cronometroRodando" />
    <Botao class="is-warning" @clicado="pararCronometro" icone="fa-solid fa-pause" texto="Pause" :desabilitado="!cronometroRodando" />
    <Botao class="is-danger" @clicado="finalizarCronometro" icone="fas fa-stop" texto="Finalizar" :desabilitado="!cronometroRodando" />
        

    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CronometroComponent from "./Cronometro.vue";
import Botao from "./Botao.vue";

export default defineComponent({
    name: "TemporizadorComponent",
    emits: ['aoTemporizadorFinalizado'],
    components: {
        CronometroComponent,
        Botao,
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