<template>
  <!-- Criando layout de colunas sem o espaçamento padrão entre as colunas com o framework Bulma -->
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral />
    </div>
    <div class="column is-three-quarter">
      <!-- Conteúdo principal -->
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';

export default defineComponent({
  name: 'App',
  components: {
    BarraLateral,
  },
});
</script>

<style scoped>
/* Seu estilo aqui */
</style>
