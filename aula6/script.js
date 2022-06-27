//tipos de função:

//função declarativa
function funcao() {
    console.log('Sou uma mensagem de uma função declarativa')
}

funcao()

// função atribuida a expresão

//com nomeação
var funcao = function funcao() {
    console.log('Sou uma mensagem de função atribuida a expressão')
}

funcao()

//sem nomeação
var funcao = function() {
    console.log('Sou uma mensagem de função atribuida a expressão')
}

funcao()

//arrow function
var funcao = () => {
    console.log('Sou uma Arrow Function')
}

funcao()
