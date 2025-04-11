let capitaoAmericaVida = 100;
let homemdeFerroVida = 100;

//Controle do Jogo
let rodada = 1 
let limite = 5;

// Controle de ataques
let ataqueCapitaoAmerica = Math.floor(Math.random()* 20 );
let ataqueHomemdeFerro = Math.floor(Math.random()* 20 );

// Enquanto os dois estiverem vivios
while (capitaoAmericaVida >0 &&  homemdeFerrovida > 0) {
    console.log("Rodada", rodada);

}

// Aplicar golpes
capitaoAmericaVida = capitaoAmericaVida - ataqueHomemdeFerro;
homemdeFerroVida = homemdeFerroVida - ataqueCapitaoAmerica;


//Exibir info de ataques
