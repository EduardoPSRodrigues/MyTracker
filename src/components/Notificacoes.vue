<template>
  <div class="notificacoes">
    <article
      class="message"
      :class="contexto[notificação.tipo]"
      v-for="notificação in notificacoes"
      :key="notificação.id"
    >
      <div class="message-header">{{ notificação.titulo }}</div>
      <div class="message-body">{{ notificação.texto }}</div>
    </article>
  </div>
</template>

<script lang="ts">
  import { TipoNotificacao } from "@/interfaces/INotificacao";
  import { useStore } from "@/store";
  import { computed, defineComponent } from "vue";

  export default defineComponent({
    name: "NotificacoesComponent",
    data() {
      return {
        contexto: {
          [TipoNotificacao.SUCESSO]: "is-success",
          [TipoNotificacao.ATENCAO]: "is-warning",
          [TipoNotificacao.FALHA]: "is-danger",
        },
      };
    },
    setup() {
      const store = useStore();
      return {
        notificacoes: computed(() => store.state.notificacoes),
      };
    },
  });
</script>

<style scoped>
  .notificacoes {
    position: absolute; /* Posiciona o elemento de forma absoluta */
    right: 0; /* Alinha o elemento à direita */
    width: 300px; /* Define a largura do elemento */
    padding: 8px; /* Adiciona um espaçamento interno */
    z-index: 105; /* Define a ordem de empilhamento */
  }
</style>
