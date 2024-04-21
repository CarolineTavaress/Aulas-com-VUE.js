const { createApp } = Vue

createApp({
    data(){
        return{
            display:'0',
            numero_atual: null,
            numero_anterior: null,
            operador: null
        }
    },
    methods: {
        lidar_botao(botao){
            switch (botao){
                case "*":
                    this.lidar_operador('*')
                    break
                case "-":
                    this.lidar_operador('-')
                    break
                case "+":
                    this.lidar_operador('+')
                    break
                case "/":
                    this.lidar_operador('/')
                    break
                case ".":
                    this.lidar_decimal()
                    break
                case "=":
                    this.lidar_igual()
                    break
                case "AC":
                    this.lidar_clear()
                    break
                default:
                    this.lidar_numero(botao)
            }
        },
        lidar_operador(op){
            this.operador = op
            this.numero_anterior = parseFloat(this.display)
            this.display = '0'
        },
        lidar_decimal(){
            if (!this.display.includes('.')) {
                this.display += '.'
            }
        },
        lidar_igual(){
            this.numero_atual = parseFloat(this.display)
            switch (this.operador) {
                case "*":
                    this.display = this.numero_anterior * this.numero_atual
                    break
                case "-":
                    this.display = this.numero_anterior - this.numero_atual
                    break
                case "+":
                    this.display = this.numero_anterior + this.numero_atual
                    break
                case "/":
                    this.display = this.numero_anterior / this.numero_atual
                    break
            }
            this.operador = null
        },
        lidar_clear(){
            this.display = '0'
            this.numero_atual = null
            this.numero_anterior = null
            this.operador = null
        },
        lidar_numero(numero){
            if (this.display === '0') {
                this.display = numero
            } else {
                this.display += numero
            }
        }
    }
}).mount("#app")
