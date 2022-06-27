
//estruturas condicionais

//estruturas de repetição
let array = ['Valor1', 'Valor2', 'Valor3', 'Valor4', 'Valor5']
let object = {propriedade1: 'Valor1', propriedade2: 'Valor2', propriedade3: 'Valor3'}

//for - executa até que seja false
for (let indice = 0; indice < array.length; indice++) {
    console.log(indice)
}

//for in - executa repetição a partir de uma propriedade

//com array
for (let i in array ) {
    console.log(i)
}

//com object
for (let i in object) {
    console.log(i)
}

//for of - executa repetição a partir de um valor

//com array
for ( let i of array) {
    console.log(i)
}

//com object não funciona pois não é iterável
for  (i of object.propriedade1) {
    console.log(i)
}

//while - executa enquanto a condição for verdadeira
var a = 0

while (a < 10) {
    a++
    console.log(a)
}

//do while - executa até que seja falsa
do {
    a++;
    console.log(a);
} while (a < 10);
