const { createApp } = Vue;

createApp({
    data(){
        return{
            heroi: {vida: 100},
            vilao: {vida: 100},
            quantidade_pocao: 2,
            turno: true,
            botao_clicado: false,
            jogo_ativo: true,
            segundos: 5,
            timer: null,
            imagem_heroi: './imagens/pose_sailormoon.jpg',
            imagem_vilao: './imagens/koan_pose.png'
        }
    },
    created(){
        this.iniciar_timer();
    },
    methods:{
        atacar(isHeroi) {
            if(isHeroi) {
                this.vilao.vida -= 10;
                this.ativar_gif('./imagens/ataque_sailormoon.gif');
            } else {
                this.heroi.vida -= 20;
            }
            this.botao_desativado = true;
            this.fim_de_jogo();
        },
        defender(isHeroi) {
            if(isHeroi){
                this.ativar_gif('./imagens/defesa_sailormoon.gif');
            }
            this.botao_desativado = true; 
        },
        usar_pocao(isHeroi) {
            if (isHeroi && this.quantidade_pocao > 0){
                if(this.heroi.vida <= 80){
                    this.heroi.vida += 20;
                    this.quantidade_pocao -= 1;
                    this.ativar_gif('./imagens/cura_sailormoon.gif');
                }
            } else {
                alert("Você usou todas as poções!")
                this.botao_desativado = false;
            }
            this.botao_desativado = true;
        },
        correr(isHeroi) {
            if(isHeroi){
                this.heroi.vida = 100
                this.vilao.vida = 100
                this.turno = true;
                this.ativar_gif('./imagens/correndo_sailor.gif');
                alert("A heroína correu!")
            }
            this.botao_desativado = false;
        },
        ativar_gif(imagem){
            this.imagem_heroi = imagem;
            setTimeout(() => {
                this.imagem_heroi = './imagens/pose_sailormoon.jpg';
            }, 4000);
        },
        acao_vilao() {
            const acoes = ['atacar', 'atacar','defender', 'defender', 'usar_pocao', 'correr'];
            const acaoAleatoria = acoes[Math.floor(Math.random() * acoes.length)];
            this[acaoAleatoria](false);
        },
        fim_de_jogo(){
            if (this.heroi.vida <= 0 || this.vilao.vida <= 0){
                if(this.heroi.vida <= 0){
                    alert("O vilão ganhou a partida!")
                } else {
                    alert("O herói ganhou a partida")
                }
                this.heroi.vida = 100;
                this.vilao.vida = 100;
                this.jogo_ativo = true;
                this.quantidade_pocao = 2;
                this.botao_desativado = false;
            }
        },
        iniciar_timer(){
            this.timer = setInterval(() => {
                if (this.jogo_ativo && this.segundos > 0) {
                    this.segundos--;
                } else {
                    this.segundos = 5;
                    if (this.jogo_ativo) {
                        if (!this.botao_clicado) {
                            if (this.turno) {
                                this.turno = false;
                                if (!this.botao_desativado) {
                                    this.acao_vilao();
                                }
                            } else {
                                this.turno = true;
                                this.botao_desativado = false;
                            }
                        }
                    }
                }
            }, 1000);
        },
        beforeDestroy(){
            clearInterval(this.timer);
        }
    }
}).mount("#app")
