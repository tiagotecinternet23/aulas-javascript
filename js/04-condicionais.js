console.log("Condicionais!");

/* if (SE) / else (SENÃO) */
let nome = "Klaibert";
let idade = 9;

/* Verificar a idade pra saber 
se esta pessoa é maior ou menor 
de idade. */

/* O if/else usará esta variável para
guardar o resultado da condicional. Por isso,
a inicializamos sem valor (indefinida) */
let mensagem; 

if( idade >= 18 ){
    mensagem = "maior";
} else {
    mensagem = "menor";
}

// Apresentando os resultados da condicional
console.log(`${nome}, é ${mensagem} de idade!`);

/* Exercícios
1) Crie duas variáveis conforme a seguir:
Nota 1 (contendo um valor de 0 a 10)
Nota 2 (contendo outro valor de 0 a 10) */
let nota1 = 0;
let nota2 = 7;

/* 2) Crie uma variável chamada "Média" 
que receberá o valor CALCULADO da média matemática
das duas notas informadas. Dica: você deve SOMAR as duas
notas e DEPOIS dividir por 2. */

// OPÇÃO 1: FAZER DIRETO
//let media = (nota1 + nota2) / 2;

// OPÇÃO 2: SEPARAR OS CÁLCULOS
let total = nota1 + nota2;
let media = total / 2;

console.log(media);

/* 3) Programe uma condicional que verifique o valor
da média calculada. Se a média for maior/igual a 7,
mostre "aprovado". Caso contrário, mostre "reprovado".*/
let resultado;
if(media >= 7){
    resultado = "aprovado";
} else {
    resultado = "reprovado";
}

// Lógica inversa
// if(media < 7){
//     resultado = "reprovado";
// } else {
//     resultado = "aprovado";
// }


console.log(resultado);













/* Operadores RELACIONAIS
>=  MAIOR OU IGUAL
<=  MENOR OU IGUAL
>   MAIOR
<   MENOR
==  IGUALDADE (VERIFICAR SE VALORES IGUAIS)
!=  DIFERENÇA (VERIFICAR SE VALORES DIFERENTES) */