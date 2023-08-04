// Criando um array (vetor)
let alunos = ["Melissa", "Diana", "Leandro", "Eliel", "Patrícia"];

// Exibindo a estrutura de dados do array
console.log(alunos);

// A melhor aluna da sala é a Melissa
console.log(`A melhor aluna da sala é a ${alunos[0]}`);

// E o pior é o Eliel.
console.log(`E o pior é o ${alunos[3]}`);

/* Exercício 
1) Crie um array com o nome de 4 tecnologias/programas
que você quer aprender/estudar mais.*/
let programas = [
    "Photoshop", "Illustrator", "After Effects", "Unity"
];

/* 2) Monte e mostre uma frase falando para que serve
o nome da segunda e da última tecnologia/programa. */
console.log(`${programas[1]} é um programa para design gráfico, ${programas[3]} é uma game engine.`);

// Array como matriz de 2 dimensões
let linguagens = [ 
    // 0      1      2
    ["HTML", "CSS", "JS"], // 0
    ["Java", "C++", "C#"]  // 1
];

console.log(linguagens);

console.log(linguagens[0][1]); //CSS
console.log(linguagens[1][0]); // Java
console.log(linguagens[0][0]); // HTML


