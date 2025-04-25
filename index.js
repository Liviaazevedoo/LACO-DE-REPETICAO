// let js = "Javascript"

// for (let i = 0; i < js.length; i++ ) {  /// 1 -> 2 -> 3 ->
//     console.log(js[i])
// } 

// let frutas = ['Maçã', 'Banana', 'Uva', 'melancia'] //array

// let numeros = [0, 1, 2, 3 ]

// for(i = 0; i < 4; i++){
//     console.log(frutas[i])
// }

// //adivinhação de 1 valor

// let pensamento = 7
// let valor

// do {
//     valor = parseInt(prompt(''))
// }

// Leia o preço de um produto e a cor da sua etiqueta. De acordo com a cor da etiqueta aplique um desconto sobre o produto. Verde - 10% | Amarelo - 20% | Azul - 30 % | Vermelho 40%. Para a questão 1 resolva o problema de inserção de uma cor de etiqueta que não existe na loja. Garanta que o usuário só irá digitar Verde, Amarelo, Azul ou Vermelho. Enquanto o usuário não digitar um valor válido para etiqueta, informe que ele digitou um valor inválido e peça novamente a cor da etiqueta.

let cor = prompt('Digite a cor da sua etiqueta').toLowerCase()

do{
    cor = prompt('Digite a cor da etiqueta: verde, amarelo, azul ou vermelho')
}while (cor != 'verde' && cor != 'amarelo' && cor != 'azul' && cor != 'vermelho')
    

const preco = Number(prompt('Digite o preço do produto'))

let desconto


switch(cor) {
    case 'verde' :
        desconto = 0.1
        break
    case 'amarelo':
        desconto = 0.2
        break
    case 'azul':
        desconto = 0.3
        break
    case 'vermelho':
        desconto = 0.4
        break
    default:
        alert('Você digitou uma etiqueta que não existe')
}
let valorDesconto = preco * (1 - desconto)
valorDescontado = preco - (preco * desconto)
let resposta = alert(`o valor total é ${preco} e com desconto ficou ${valorDescontado}`)




