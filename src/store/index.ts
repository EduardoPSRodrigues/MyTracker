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
} from "./tipo-mutacoes";
import { INotificacao, TipoNotificacao } from "@/interfaces/INotificacao";

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
    notificacoes: [
      {
        id: 1,
        texto: "Uma notificação de sucesso",
        titulo: "sucesso",
        tipo: TipoNotificacao.SUCESSO,
      },
      {
        id: 2,
        texto: "Uma notificação de atenção",
        titulo: "atenção",
        tipo: TipoNotificacao.ATENCAO,
      },
      {
        id: 3,
        texto: "Uma notificação de falha",
        titulo: "falha",
        tipo: TipoNotificacao.FALHA,
      },
    ],
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
  },
});

export function useStore(): Store<Estado> {
  return vuexUseStore(key);
}
