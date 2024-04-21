namespace vetores{
    let numeros: number[] = [1,2,3,4,5,6,7,8,9];
    let frutas: Array<string> = ['morango', 'laranja', 'kiwi'];
    
    type livro ={
        titulo: string;
        autor: string;
        ano: number;
    }

    let livros: livro[] = [{
        titulo: "Senhos dos aneis",
        autor: "JJ R Tolkien",
        ano: 1954
    }, 
    {
        titulo: "Harry Potter",
        autor: "J K Rowling",
        ano: 1995
    }]

    for (let i = 0; i < numeros.length; i++){
        console.log(numeros[i]);
    }

    // Adicionando na ultima posição do array
    numeros.push(6);

    //Remover o ultimo elemento do array
    numeros.pop();

    //Adicionando no inicio da array
    numeros.unshift(0);

    //Removendo o primero elemento do array
    numeros.shift();

    livros.forEach(livro => {
        console.log(`${livro.titulo}\n${livro.autor}\n${livro.ano}\n---------------------------`)
    })

    let quandrados = numeros.map(function(num){
        return num*num;
    })

    console.log(quandrados);

    let pares:number[] = numeros.filter(function (num){
            return num % 2 === 0;
        })

    console.log(pares);

    let soma: number = numeros.reduce(function (total, num){
        return total + num
    })

    console.log(soma)

}