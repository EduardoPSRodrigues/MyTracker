<template>
  <div class="projetos">
    <!-- Classe title usando o framework Bulma -->
    <h1 class="title">Projetos</h1>

    <router-view />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "ProjetosComponent",
  });
</script>

<style scoped>
  .projetos {
    padding: 1.25rem;
  }
</style>
