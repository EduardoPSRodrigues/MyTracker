<template>
  <section class="projetos">
    <!-- Classe title e o form usando o framework Bulma -->
    <h1 class="title">Projetos</h1>

    <form @submit.prevent="salvar">
      <div class="field">
        <label for="nomeDoProjeto" class="label"> Nome do projeto </label>
        <input
          type="text"
          class="input"
          v-model="nomeDoProjeto"
          id="nomeDoProjeto"
        />
      </div>

      <div class="field">
        <button class="button" type="submit">Salvar</button>
      </div>
    </form>

  </section>
</template>

<script lang="ts">
  import { useStore } from "@/store";
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "FormularioProjetos",
    data() {
      return {
        nomeDoProjeto: ""
      };
    },
    methods: {
      salvar() {
        this.store.commit("ADICIONA_PROJETO", this.nomeDoProjeto); // Chama a mutation
        this.nomeDoProjeto = ""; // Limpa o campo de texto
        this.$router.push("/projetos"); // Redireciona para a página de projetos
      },
    },
    setup() {
      const store = useStore(); // Pega a store que formatei e esta com a key
      return {
        store
      };
    },
  });
</script>

<style scoped>
  .projetos {
    padding: 1.25rem;
  }
</style>
