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
  import IProjeto from "@/interfaces/IProjeto";
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "ProjetosComponent",
    data() {
      return {
        nomeDoProjeto: "",
        projetos: [] as IProjeto[],
      };
    },
    methods: {
      salvar() {
        const projeto: IProjeto = {
          nome: this.nomeDoProjeto,
          id: new Date().toISOString(),
        };
        this.projetos.push(projeto); // Adiciona o projeto no array de projetos
        this.nomeDoProjeto = ""; // Limpa o campo de texto
      },
    },
  });
</script>

<style scoped>
  .projetos {
    padding: 1.25rem;
  }
</style>
