import IProjeto from "@/interfaces/IProjeto";
import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

interface Estado {
  projetos: IProjeto[];
}

// Na versão 3 do Vue mudou o store e precisa de uma chave de acesso
// Para ter acesso ao store em qualquer componente, é necessário exportar a chave de injeção e o store
// Symbol é um tipo de dado primitivo e único, que pode ser usado como chave de propriedade de um objeto.
export const key: InjectionKey<Store<Estado>> = Symbol();

export const store = createStore<Estado>({
  state: {
    projetos: [
      { id: "1", nome: "Projeto 1" },
      { id: "2", nome: "Projeto 2" },
      { id: "3", nome: "Projeto 3" },
    ],
  },
});
