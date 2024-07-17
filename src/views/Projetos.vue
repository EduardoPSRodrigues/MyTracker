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

    <!-- Classe do Bulma para pegar a largura toda e criar uma tabela -->
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="projeto in projetos" :key="projeto.id">
          <td>{{ projeto.id }}</td>
          <td>{{ projeto.nome }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
  import { useStore } from "@/store";
  import { computed, defineComponent } from "vue";

  export default defineComponent({
    name: "ProjetosComponent",
    data() {
      return {
        nomeDoProjeto: ""
      };
    },
    methods: {
      salvar() {
        this.store.commit("ADICIONA_PROJETO", this.nomeDoProjeto); // Chama a mutation
        this.nomeDoProjeto = ""; // Limpa o campo de texto
      },
    },
    setup() {
      const store = useStore(); // Pega a store que formatei e esta com a key
      return {
        store,
        projetos: computed(() => store.state.projetos) // Pega o estado projetos
      };
    },
  });
</script>

<style scoped>
  .projetos {
    padding: 1.25rem;
  }
</style>
