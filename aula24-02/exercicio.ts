namespace exercicio{
    //escreva um programa em TS que mostre os números primos de 0 a 100
    // utilizamos apenas o laço de repetição while

    let numero: number = 2
    while (numero <= 100){
        let primo: boolean = true;
        let divisor: number = 2;
        while (divisor < numero){
            if(numero % divisor === 0 ){
                primo = false;
                break;
            }
            divisor++;
        }
        if (primo == true){
            console.log(`O número ${numero} é primo!`)
        }
        numero++;
    }
}