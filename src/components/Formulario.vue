<template>
  <div class="box">
    <div class="columns">
      <!-- Outra forma de divisão, sendo que essa divisão é em 8 colunas -->
      <div
        class="column is 8 is-flex is-align-items-center is-justify-content-flex-start"
        role="form"
        aria-label="Formulário para criação de uma nova tarefa"
      >
        <input
          type="text"
          class="input"
          placeholder="Qual tarefa você deseja iniciar?"
        />
      </div>

      <!-- Framework Bulma -->
      <div class="column">
        <div
          class="is-flex is-align-items-center is-justify-content-flex-start"
        >
          <section class="p-3">
            <strong>{{ tempoDecorrido }}</strong>
          </section>
          <button class="m-3 button" @click="iniciarCronometro">
            <span class="icon">
              <i class="fas fa-play"></i>
            </span>
            <span>Play</span>
          </button>
          <button class="m-3 button" @click="pararCronometro">
            <span class="icon">
                <i class="fa-solid fa-pause"></i>
            </span>
            <span>Pause</span>
          </button>
          <button class="m-3 button" @click="finalizarCronometro">
            <span class="icon">
                <i class="fa-solid fa-check"></i>
            </span>
            <span>Finalizar</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

export default defineComponent({
    name: "FormularioComponent",
    data() {
        return {
            tempoEmSegundos: 0,
            cronometro: 0,
        };
    },
    computed: {
        // Método computado para calcular o tempo decorrido
        tempoDecorrido(): string {
            return new Date(this.tempoEmSegundos * 1000)
                .toISOString()
                .substr(11, 8); // Formato HH:mm:ss
        },
    },
    methods: {
        iniciarCronometro() {
            this.cronometro = setInterval(() => {
                //A cada 1 segundo, o cronômetro será atualizado
                this.tempoEmSegundos++;
            }, 1000);
        },
        pararCronometro() {
            clearInterval(this.cronometro);

        },
    },
});
</script>
