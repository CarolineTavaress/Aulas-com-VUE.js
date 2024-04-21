namespace repeticaos{

    let life_hero: number = 100;
    let atk_boss: number = 5;
    let atk_hero: number = 2;
    let life_boss: number = 1000;

    while (life_hero != 0){
        console.log("O boss atacou o herói!")
        life_hero -= atk_boss;
        if(life_hero <=0){
            break;
        }
    }

    do {
        console.log("O herói atacou o boss!");
        life_boss -= atk_hero;
    } while (life_boss >= 0)


    do{
        console.log("O herói se curou!");
        life_hero += 20;
    }while (life_hero <= 50)

    for (let i= 0; i <= 10; i ++){
        console.log("O heroi subiu de nível! \nNível: " + i);
    }

}