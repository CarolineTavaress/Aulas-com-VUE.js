const { createApp } = Vue;

createApp({
    data(){
        return {
            nome: "",
            sobrenome: "",
            interruptor: '',
            ultimo_estado: 'apagada'
        }
    },
    methods: {
        msg() {
            return (`Olá, ${this.nome} ${this.sobrenome}`)
        },
        verificar_estado: function() {
            if(this.interruptor === 'acesa' || this.interruptor === 'apagada'){
                this.ultimo_estado = this.interruptor;
            }
        }
    }
}).mount("#app")