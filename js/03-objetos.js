// Exemplo 1: objeto com dados de uma pessoa
let pessoa = {
    nome: "Jon Oliva",
    idade: 66,
    cidade: "São Paulo",
    estado: "SP"
};

// Exibindo a estrutura do objeto
console.log(pessoa);

// O Jon Oliva está na cidade de São Paulo
console.log(
    `O ${pessoa.nome} está na cidade de ${pessoa.cidade}`
);

// Exemplo 2: objeto com array
let livro = {
    titulo: "Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    volumes: [
        "A Sociedade do Anel", 
        "As Duas Torres",
        "O Retorno do Rei"
    ]
}

console.log(livro);

// Senhor dos Anéis
console.log( livro.titulo ); 

// A Sociedade do Anel
console.log( livro.volumes[0] );


// Exemplo 3: array com objetos
let livros = [
    {
        titulo: "Harry Potter",
        autor: "J.K. Rowling"
    },
    {
        titulo: "Instrumentos Mortais",
        autor: "Cassandra Clare"
    },
    {
        titulo: "O Iluminado",
        autor: "Stephen King"
    }
];

console.log(livros);

// Stephen King
console.log( livros[2].autor );

/* Exercícios
1) Crie um objeto (variável ou constante) chamado "aluno" contendo os seguintes dados:

- Nome Completo
- Data de Nascimento
- Lista (ARRAY) de telefones de contato (fixo e celular)
- (DESAFIO) Endereço (deve ser um objeto contendo Rua, Número e Bairro) */
let aluno = {
    nome_completo : "Chapolin Colorado",
    data_nascimento: "10/05/1960",
    telefones: ["(11) 2135-0300", "(11) 98888-7777"],
    endereco: {
        rua: "Francisco Coimbra",
        numero: "403",
        bairro: "Penha"
    }
};


/* 2) Monte uma frase mostrando o nome do aluno, o telefone celular e o bairro em que mora. */
console.log(
    `Nome: ${aluno.nome_completo} 
    Celular: ${aluno.telefones[1]}  
    Bairro: ${aluno.endereco.bairro}`
);








/* LEMBRETES! 

() PARÊNTESES -> indica lidar com funções

[] COLCHETES -> indica lidar com arrays 

{} CHAVES -> indica lidar com objetos
Obs.: chaves também podem ser usadas em outros recursos */






