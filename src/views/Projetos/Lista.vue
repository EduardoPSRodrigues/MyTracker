<template>
  <section>
    <!-- Classe form usando o framework Bulma -->
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

            <button class="button ml-2 is-danger" @click="excluir(projeto.id)">
              <span class="icon is-small">
                <i class="fas fa-trash"></i>
              </span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
  import { useStore } from "@/store";
  import { EXCLUIR_PROJETO } from "@/store/tipo-mutacoes";
  import { computed, defineComponent } from "vue";

  export default defineComponent({
    name: "ListaComponent",
    methods: {
      excluir(id: string) {
        this.store.commit(EXCLUIR_PROJETO, id);
      },
    },
    setup() {
      const store = useStore(); // Pega a store que formatei e esta com a key
      return {
        projetos: computed(() => store.state.projetos), // Pega o estado projetos
        store, // Libera o store para uso
      };
    },
  });
</script>
