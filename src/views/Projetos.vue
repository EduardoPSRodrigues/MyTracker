<template>
  <section class="projetos">
    <!-- Classe title e o form usando o framework Bulma -->
    <h1 class="title">Projetos</h1>

    <router-link to="/projetos/novo" class="button">
      <span class="icon is-small">
        <i class="fas fa-plus"></i>
      </span>
      <span>Novo projeto</span>
    </router-link>

    <!-- Classe do Bulma para pegar a largura toda e criar uma tabela -->
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="projeto in projetos" :key="projeto.id">
          <td>{{ projeto.id }}</td>
          <td>{{ projeto.nome }}</td>
          <td>
            <router-link :to="`/projetos/${projeto.id}`" class="button">
              <span class="icon is-small">
                <i class="fas fa-pencil-alt"></i>
              </span>
            </router-link>
          </td>
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
    setup() {
      const store = useStore(); // Pega a store que formatei e esta com a key
      return {
        projetos: computed(() => store.state.projetos), // Pega o estado projetos
      };
    },
  });
</script>

<style scoped>
  .projetos {
    padding: 1.25rem;
  }
</style>
