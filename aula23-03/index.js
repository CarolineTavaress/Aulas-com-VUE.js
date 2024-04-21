const { createApp } = Vue;

createApp({
    data(){
        return{
            nomes:[{nome: "jubileu", idade: 17, email: "jubileu@thundercats.com", expanded: false}, 
            {nome: "jubileu", idade: 17, email: "jubileu@thundercats.com", expanded: false},
            {nome: "jubileu", idade: 17, email: "jubileu@thundercats.com", expanded: false},
            {nome: "jubileu", idade: 17, email: "jubileu@thundercats.com", expanded: false}] 
        }
    },
    methods:{
        expandirItem(obj){
            obj.expanded = !obj.expanded
        }
    }
}).mount("#app")