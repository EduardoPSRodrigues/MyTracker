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
          v-model="descricaoTarefa"
        />
      </div>

      <!-- Framework Bulma -->
      <div class="column">
        <TemporizadorComponent @aoTemporizadorFinalizado="finalizarTarefa" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import TemporizadorComponent from "./Temporizador.vue";

  export default defineComponent({
    name: "FormularioComponent",
    components: {
      TemporizadorComponent,
    },
    data() {
      return {
        descricaoTarefa: "",
      };
    },
    methods: {
      finalizarTarefa(tempoDecorrido: number): void {
        console.log(
          `Tarefa (${this.descricaoTarefa}) finalizada em ${tempoDecorrido} segundos`
        );
        this.descricaoTarefa = "";
      },
    },
  });
</script>
