namespace Hello_World{ //Criar um espaço 
    console.log("Hello World!!");

    //var - public
    //let - privada
    //const - constante

    var status: string = "Atacou";
    let qtd: number = 5;

    console.log(`O boss ${status} ${qtd} vezes.`);

    let vida_heroi: number = 100;

    console.log(`O herói está com ${vida_heroi - (qtd * 2)} de vida`)
}