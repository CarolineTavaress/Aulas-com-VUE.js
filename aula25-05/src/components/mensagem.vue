<script>
import Menssagem from "../components/menssagem.vue";
import Usuario from "../components/usuario.vue";
export default {
    name: "App",
    components:{
        Menssagem,
    },
    data(){
        return{
            idade: 10
        }
    }
}
</script>

<template>
    <h1>Valores entre componentes</h1>
    <Messagem :idade="idade"></Messagem>
    <Usuario :idade="idade" @trocar_idade="idade++"></Usuario>
</template>