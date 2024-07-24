<template>
  <div class="box formulario is-fullwidth">
    <div class="columns is-multiline">
      <!-- Input de tarefa -->
      <div
        class="column is-12-mobile is-5-tablet is-flex is-align-items-center is-justify-content-flex-start"
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

      <!-- Seleção de projeto -->
      <div
        class="column is-12-mobile is-3-tablet is-flex is-align-items-center is-justify-content-flex-start"
      >
        <div class="select is-fullwidth">
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

      <!-- Temporizador -->
      <div class="column is-12-mobile is-4-tablet">
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
        const projeto = this.projetos.find((p) => p.id == this.idProjeto);
        if (!projeto) {
          this.notificar(
            TipoNotificacao.ERRO,
            "Ops!",
            "Selecione um projeto antes de finalizar a tarefa!"
          );
          return;
        }
        this.$emit("aoSalvarTarefa", {
          duracaoEmSegundos: tempoDecorrido,
          descricao: this.descricaoTarefa,
          projeto: this.projetos.find(
            (projeto) => projeto.id === this.idProjeto
          ),
        });
        this.descricaoTarefa = "";
      },
    },
    setup() {
      const store = useStore();
      return {
        store,
        projetos: computed(() => store.state.projetos),
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
