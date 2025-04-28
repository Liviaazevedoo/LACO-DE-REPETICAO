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

// let cor = prompt("Digite a cor da sua etiqueta").toLowerCase();

// do {
//   cor = prompt("Digite a cor da etiqueta: verde, amarelo, azul ou vermelho");
// } while (
//   cor != "verde" &&
//   cor != "amarelo" &&
//   cor != "azul" &&
//   cor != "vermelho"
// );

// const preco = Number(prompt("Digite o preço do produto"));

// let desconto;

// switch (cor) {
//   case "verde":
//     desconto = 0.1;
//     break;
//   case "amarelo":
//     desconto = 0.2;
//     break;
//   case "azul":
//     desconto = 0.3;
//     break;
//   case "vermelho":
//     desconto = 0.4;
//     break;
//   default:
//     alert("Você digitou uma etiqueta que não existe");
// }
// let valorDesconto = preco * (1 - desconto);
// valorDescontado = preco - preco * desconto;
// let resposta = alert(
//   `o valor total é ${preco} e com desconto ficou ${valorDescontado}`
// );

//2.Crie um programa que peça ao usuário para digitar uma senha. Continue pedindo a senha até que o usuário digite "1234".
//Use um laço do…while para controlar as tentativas e, quando a senha correta for inserida, exiba a mensagem "Acesso Permitido".

// let senha = prompt('Digite uma senha')


// do {
//     senha = prompt('Digite uma senha');
// } 
// while (
//     senha != 1234
// )
// let resposta = alert('Acesso Permitido');


//3.Você precisa criar um programa que ajude a calcular a média de notas de uma turma. 
// O programa deve pedir ao usuário a quantidade de alunos na turma e, em seguida, solicitar a nota de cada aluno. 
// Utilize um laço for para capturar as notas e acumular a soma. Após inserir todas as notas, o programa deve calcular e exibir a média da turma.

// let quatidadeAlunos = parseInt(prompt('Digite a quantidade de alunos:'))

// let notasAluno = 0

// for (let index = 0; index < quatidadeAlunos; index++) {
//  notasAluno += parseFloat(prompt('Digite a nota do Aluno:'))
// }
// const media = notasAluno/quatidadeAlunos

// alert(`A media dos alunos é ${media}`)

//4.Você é responsável por calcular o total das vendas do dia para uma pequena loja. 
// Escreva um programa que peça ao usuário o valor de cada venda, uma por vez. 
// Use um laço de repetição para capturar esses valores e adicione-os a um total acumulado. 
// O programa deve continuar pedindo valores até que o usuário insira "0" (para finalizar).
//  Ao final, exiba o total de vendas do dia.

// let Venda = 0
// let totalAcumulado = 0

// do{
//     valorVenda = parseFloat(prompt(''))
// }

//Para cada um dos cenários descritos abaixo, escreva um código JavaScript que utilize os métodos de array push(), pop(), shift() e unshift().

//**Cenário 1: Gerenciamento de Tarefas 
// Desenvolva um script que permita ao usuário criar uma lista de tarefas. 
// O usuário deve ser capaz de adicionar múltiplas tarefas ao final da lista até decidir parar. 
// Ao final da adição, a lista completa de tarefas deve ser exibida.
// Em seguida, o script deve perguntar se o usuário deseja remover a primeira tarefa da lista, 
// realizando a remoção (se houver tarefas) e mostrando a lista atualizada, ou informando que não há tarefas a serem removidas.





