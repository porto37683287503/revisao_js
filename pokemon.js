//  Declarando variaveis 
let pikachuEnergia = 80;
let charmanderEnergia = 80;

// Controle do jogo
let rodada = 1;

//Organizção de ataques

let ataquePikachu = 0;
let ataqueCharmander = 0;


// Controle dos ataques
let pikachu = 0;
let charmander = 0;

// Enquantos os dois tiverem vivos, faça ataques
while (pikachuEnergia > 0 && charmanderEnergia > 0 ){
    console.log("🔁Rodada", rodada);

    // Gerar golpes aleatorios
    ataquepikachu = Math.floor(Math.random() * 25 );
    ataquecharmander =  Math.floor(Math.random() * 18 );

    //Aplicar os golpes
    pikachuEnergia = pikachuEnergia - ataquecharmander;
    charmanderEnergia = charmanderEnergia - ataquepikachu;

    //Exibir info de ataque
    console.log("⚡ Pikachu deu", ataqueCharmander, "de dano!");
    console.log("🔥 charmander deu", ataquePikachu, "de dano!");

    //Mostrar a vida de cada um
    console.log("⚡ Vida de pikachu : ", pikachuEnergia);
    console.log("🔥vida do pikachu ; ", charmanderEnergia);
    console.log("--------------------------------");

    // Ir para proxima rodada
    rodada++;
}

//Calcular os resultados
if (pikachuEnergia <= 0 && charmanderEnergia <= 0){
    console.log("😱 Empate! Os dois foram pro chão ao mesmo tempo!")
} else if (pikachuEnergia > charmanderEnergia){
    console.log("🏆 Pikachu venceu com honra!");
} else {
    console.log("🏆 Charmander venceu com estilo!");
}


