//sintaxe básica em javascript

//atribuindo uma variaveis
var vOuf = false
console.log(vOuf)

//verificando o tipo  de dado
var numeroQualquer = 1
console.log(typeof(numeroQualquer))

var nome = 'marcelo'
console.log(typeof(nome))

//var
var variavel = 'marcelo'
variavel = 'hadassa'
console.log(variavel)

//let
let variavel2 = 'ingrid'
variavel2 = 'maria'
console.log(variavel2)

//constante
const constante = 'ismael'
console.log(constante)

var escopoglobal = 'global'
console.log(escopoglobal)

//funcao com escolo local
function escopoLocal() {
    let escopoLocalInterno = 'local'
    console.log(escopoLocalInterno)
}

escopoLocal()

//comparacao de valor
var comparacao = '0' == 0
console.log(comparacao)

//comparacao de valor e tipo
var comparacao2 = '0' === 0
console.log(comparacao2)

//adicao
var adicao = 1 + 1
console.log(adicao)

//subtracao
var subtracao = 5 - 1
console.log(subtracao)

//multiplicacao
var multiplicacao = 3 * 3
console.log(multiplicacao)

//divisao real
var divisaoReal = 6 / 2
console.log(divisaoReal)

//divisa inteira
var divisaoInteira = 5 % 2
console.log(divisaoInteira)

//potencia
var potenciacao = 2 ** 10
console.log(potenciacao)

//maior que
var maiorQue = 5 > 2
console.log(maiorQue)

// menor que
var menorQue =  5 < 2
console.log(menorQue)

//maior ou igual
var maiorOuIgual = 5 >= 2
console.log(maiorOuIgual)


//menor ou igual
var menorOuIgual = 5 <= 2
console.log(menorOuIgual)

//operadores lógicos

// e
var e = true && false
console.log(e)

//ou
var ou = true || false
console.log(ou)

//não
var nao = !ftrue
console.log(nao)