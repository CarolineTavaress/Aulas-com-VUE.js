namespace condicao{
    
    let vida: number = 100;
    let ataque: number  = 5;
    let nome: string = "Arcan";
    let exp: number = 0;
    let nível: number = 1;
    let status: string = "Vivo"
    let acao: number = Math.floor(Math.random() * 3) + 1;


    console.log(`O ${nome} atacou e ganhou 5xp`)

    exp = exp + 5 // exp +=5;

    console.log(`O ${nome} atacou e ganhou 5xp`)

    exp = exp + 5 // exp +=5;

    if(exp > 5 && exp < 10){
        console.log(`O ${nome} subiu de nível!\n Foi para o nível ${nível += 1}!`);

            vida += 10;
            ataque += 1;
            console.log(`${nome}\n Vida: ${vida}\n Ataque: ${ataque}\n`)
    }else{
        console.log(`O ${nome} subiu de nível!\n
            Foi para o nível ${nível += 2}!`);

            vida += 20;
            ataque += 2;
            console.log(`${nome}\n Vida: ${vida}\n Ataque: ${ataque}\n`)
    }
    vida = 0;
    status = vida <= 0 ? `O ${nome} morreu!` : `O ${nome} está vivo`;
    console.log(status);

    

    switch(acao){
        case 0:
            console.log(`O ${nome} se defendeu!`);
            break;
        case 1:
            console.log(`O ${nome} atacou com magia!`);
            break;
        case 2:
            console.log(`O ${nome} atacou com espadas!`);
            break;
        default: console.log(`o ${nome} levou dano!`)
    }

}