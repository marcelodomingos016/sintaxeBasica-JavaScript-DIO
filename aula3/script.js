
//vetores - arrays

// declarando um array
let array = ['string', 1, true]
console.log(array)

//guardando diferentes valores, inclusive outro array
let array2 = ['string', 1, true, ['array3'], ['array4'], ['array4'], ['array5']]
console.log(array2)

//acessando o indice de um array
console.log(array2[2])


//manipulando arrays

//forEach - realiza uma função para cada item do array

array.forEach(function(item, index){console.log(item, index)})

//adiciona no primeiro elemento do arra
array.unshift('novo item no inicio')
console.log(array)

//remove do primeiro elemento do array
array.shift()
console.log(array)

//adiciona no último elemento do array
array.push('novo item no final')
console.log(array)

//remove do último elemento do array
array.pop()
console.log(array)

//indexOf - retorna o índice de um item do array
console.log(array.indexOf(true))

//splice - remove ou substitui item por índice
let novoArray = array.slice(0, 3)
console.log(novoArray)

//slice - retorna uma parte de um array existente
array.splice(0, 3)
console.log(array)

//assim como arrays as propriedades de objetos podem guardar quaisquer valor
let object = {string: 'string', number: 1, boolean: true, array:['array']}
console.log(object.boolean)

// podemos acessar propriedades de objetos usando ponto "."
var arrayInterno = object.number
console.log(arrayInterno)

