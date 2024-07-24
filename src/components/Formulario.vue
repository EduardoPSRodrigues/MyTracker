<template>
  <div class="box formulario">
    <div class="columns">
      <!-- Outra forma de divisão, sendo que essa divisão é em 8 colunas -->
      <div
        class="column is-5 is-flex is-align-items-center is-justify-content-flex-start"
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

      <div
        class="column is-3 is-flex is-align-items-center is-justify-content-flex-start"
      >
        <div class="select">
          <select v-model="idProjeto">
            <option value="">Selecione o projeto</option>
            <option
              :value="projeto.id"
              v-for="projeto in projetos"
              :key="projeto.id"
            >
              {{ projeto.nome }}
            </option>
          </select>
        </div>
      </div>

      <!-- Framework Bulma -->
      <div class="column">
        <TemporizadorComponent @aoTemporizadorFinalizado="finalizarTarefa" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent } from "vue";
  import TemporizadorComponent from "./Temporizador.vue";
  import { useStore } from "@/store";
  import { TipoNotificacao } from "@/interfaces/INotificacao";
  import { notificacaoMixin } from "@/mixins/notificar";

  export default defineComponent({
    name: "FormularioComponent",
    emits: ["aoSalvarTarefa"],
    mixins: [notificacaoMixin],
    components: {
      TemporizadorComponent,
    },
    data() {
      return {
        descricaoTarefa: "",
        idProjeto: "",
      };
    },
    methods: {
      finalizarTarefa(tempoDecorrido: number): void {
        const projeto = this.projetos.find((p) => p.id == this.idProjeto); // Buscar pelo projeto
        if (!projeto) {
          // Se o projeto não existir, então surgirá um alerta
          this.notificar(
            TipoNotificacao.ERRO,
            "Ops!",
            "Selecione um projeto antes de finalizar a tarefa!"
          );
          return; // Ao fazer return, o restante do método salvarTarefa não será executado. Técnica de early return
        }
        // Se o projeto existe, então salva a atividade
        this.$emit("aoSalvarTarefa", {
          duracaoEmSegundos: tempoDecorrido,
          descricao: this.descricaoTarefa,
          projeto: this.projetos.find(
            (projeto) => projeto.id === this.idProjeto
          ), // Encontrar o projeto pelo id
        });
        this.descricaoTarefa = "";
      },
    },
    setup() {
      const store = useStore(); // Importar o store e a key
      return {
        // Acessar o state dentro do template
        store, // Adiciona o store ao retorno para que possa ser acessado nos métodos
        projetos: computed(() => store.state.projetos), // Retornar os projetos e é possível
      };
    },
  });
</script>

<style>
  .formulario {
    color: var(--texto-primario);
    background-color: var(--bg-primario);
  }
</style>
