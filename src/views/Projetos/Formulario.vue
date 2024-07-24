<template>
  <section>
    <!-- Classe form usando o framework Bulma -->
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
    import { TipoNotificacao } from "@/interfaces/INotificacao";
    import { useStore } from "@/store";
    import { ADICIONA_PROJETO, ALTERA_PROJETO } from "@/store/tipo-mutacoes";
    import { defineComponent } from "vue";
    import useNotificador from '@/hooks/notificador'

    export default defineComponent({
      name: "FormularioProjetos",
      // Recebe o id do projeto da URL, para isso tem que colocar props true na rota
      props: {
        id: {
          type: String,
        },
      },
      mounted() {
        // Se tiver id, pega o projeto pelo id
        if (this.id) {
          const projeto = this.store.state.projetos.find(
            (projeto) => projeto.id === this.id
          );
          this.nomeDoProjeto = projeto?.nome || "";
        }
      },
      data() {
        return {
          nomeDoProjeto: "",
        };
      },
      methods: {
        salvar() {
          if (this.id) {
            // EDIÇÃO DO PROJETO
            // Chama a mutation
            this.store.commit(ALTERA_PROJETO, {
              id: this.id,
              nome: this.nomeDoProjeto,
            });
          } else {
            // Chama a mutation
            this.store.commit(ADICIONA_PROJETO, this.nomeDoProjeto);
          }
          this.nomeDoProjeto = ""; // Limpa o campo de texto
          this.notificar(
            TipoNotificacao.SUCESSO,
            "Novo projeto adicionado",
            "O projeto foi salvo com sucesso"
          );
          this.$router.push("/projetos"); // Redireciona para a página de projetos
        },
      },
      setup() {
        const store = useStore(); // Pega a store que formatei e esta com a key
        const { notificar } = useNotificador() // Pega a função notificar do hook
        return {
          store,
          notificar,
        };
      },
    });
</script>
