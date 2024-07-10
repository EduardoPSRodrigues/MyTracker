<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playwrite+HU&display=swap" rel="stylesheet">
</head>

<template>
    <header>

        <div class="container-header">
            <div class="logo-title">
                <img class="imagem-logo" src="../assets/logo.png" alt="Logotipo do My Tracker">
                <h1> My Tracker </h1>
            </div>

            <button class="button" @click="AlterarTema">
                {{ textoBotao }}
            </button>
        </div>


    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'BarraLateral',
    data() {
        return {
            modoEscuroAtivo: false,
        };
    },
    computed: {
        textoBotao() :string {
            return this.modoEscuroAtivo ? 'Ativar modo escuro' : 'Desativar modo escuro';
        },
    },
    methods: {
        AlterarTema() {
            this.modoEscuroAtivo = !this.modoEscuroAtivo;
            document.querySelector('main')?.classList.toggle('modo-escuro')
        }
    }
})

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playwrite+HU&display=swap');

header {
    padding: 1rem;
    background: #0d3b66;
    width: 100%;
    height: 100vh;
}

h1 {
    color: white;
    font-family: "Playwrite HU", sans-serif;
    font-size: 34px;
    margin-left: 1rem;
    font-weight: bold;
}

.container-header {
    display: block;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.logo-title {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
}

.imagem-logo {
    width: 30%;
}

@media only screen and (max-width: 768px) {
    header {
        padding: 2.5rem;
        height: auto;
    }
}
</style>