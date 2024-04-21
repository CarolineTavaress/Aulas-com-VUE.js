const componenteA = {
    template: `
         <div class="componente">
              <h2> Componente A </h2>
              <p> Componente do componente </p>
         </div>
    `
}

const componenteB = {
    template: `
         <div class="componente">
              <h2> Componente B </h2>
              <p> Componente do componente </p>
         </div>
    `
}

const { createApp } = Vue;

createApp({
     data(){
        return{
            componente_atual: 'componenteA'
        }
     },
     components:{
        componenteA,
        componenteB
     },
     methods:{
        alterar_componente(){
            this.componente_atual = (this.componente_atual === 'componenteA' ? 'componenteB' : 'componenteA')
        }
     }
}).mount("#app")