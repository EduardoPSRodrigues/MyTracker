//Variáveis globais do Vuex
// Vuex é um padrão de gerenciamento de estado + biblioteca para aplicativos Vue.js.
// Ele serve como um armazém centralizado para todos os componentes em um aplicativo,
// com regras que garantem que o estado só possa ser mutado de maneira previsível.

import IProjeto from "@/interfaces/IProjeto";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import {
  ADICIONA_PROJETO,
  ALTERA_PROJETO,
  EXCLUIR_PROJETO,
  NOTIFICAR,
} from "./tipo-mutacoes";
import { INotificacao } from "@/interfaces/INotificacao";

interface Estado {
  projetos: IProjeto[];
  notificacoes: INotificacao[];
}

// Na versão 3 do Vue mudou o store e precisa de uma chave de acesso
// Para ter acesso ao store em qualquer componente, é necessário exportar a chave de injeção e o store
// Symbol é um tipo de dado primitivo e único, que pode ser usado como chave de propriedade de um objeto.
export const key: InjectionKey<Store<Estado>> = Symbol();

export const store = createStore<Estado>({
  state: {
    projetos: [],
    notificacoes: [],
  },
  // Mutations são funções que alteram o estado
  mutations: {
    [ADICIONA_PROJETO](state, nomeDoProjeto: string) {
      const projeto = {
        id: new Date().toISOString(),
        nome: nomeDoProjeto,
      } as IProjeto; // Type do projeto usando a interface
      state.projetos.push(projeto);
    },
    [ALTERA_PROJETO](state, projeto: IProjeto) {
      const index = state.projetos.findIndex((proj) => proj.id === projeto.id); // Encontra o index do projeto
      state.projetos[index] = projeto; // Substitui o projeto
    },
    [EXCLUIR_PROJETO](state, id: string) {
      state.projetos = state.projetos.filter((proj) => proj.id != id); // Filtra os projetos que não são o projeto a ser excluído e sobrepõe os dados
    },
    [NOTIFICAR](state, novaNotificacao: INotificacao) {
      novaNotificacao.id = new Date().getTime(); // Atribui um id único para a notificação
      state.notificacoes.push(novaNotificacao);

      setTimeout(() => {
        // Remove a notificação após 3 segundos
        state.notificacoes = state.notificacoes.filter(
          (notificacao) => notificacao.id != novaNotificacao.id
        );
      }, 3000);
    },
  },
});

export function useStore(): Store<Estado> {
  return vuexUseStore(key);
}
