
//estruturas condicionais

//estruturas de decisão

//if
var jogador1 = 2
var jogador2 = 1
var placar

//aninhando if's

//usando if ternário
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') : console.log('Os jogadores são inválidos')

//usando if - slse if - else
if (jogador1 > 0 && jogador2 > 0) {
    console.log('os dois jogadores marcaram ponto!')
} else if (jogador1 > 0 && jogador2 == 0) {
    console.log('O jogador 1 marcou ponto!')
    placar = jogador1 > jogador2
} else if (jogador2 > 0 && jogador1 == 0) {
    console.log('O jogador 2 marcou ponto!')
    placar = jogador2 > jogador1
} else {
    console.log('Ninguém marcou ponto!')
}

//usando switch case
switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 ganhou')
        break;
    case placar = jogador2 > jogador1:
        console.log('Jogador 2 ganhou')
        break;
    case placar = jogador2 == jogador1:
        console.log('Os jogadores emparatam')
        break;
    default:
        console.log('Ninguém ganhou!')
}