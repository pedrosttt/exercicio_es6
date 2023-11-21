// Cria um array de objetos com nome e nota de alunos
const alunos = [
    { nome: 'Alexandre', nota: 5 },
    { nome: 'Marina', nota: 10 },
    { nome: 'Pedro', nota: 7 },
    { nome: 'Natália', nota: 9 },
    { nome: 'Nicolas', nota: 4 }
];

// Cria uma função que retorna os alunos com nota maior ou igual a 6
const filtrarAlunosAprovados = (listaDeAlunos) => {
    return listaDeAlunos.filter(aluno => aluno.nota >= 6);
};

// Chama a função e armazena o resultado em uma nova variável
const alunosAprovados = filtrarAlunosAprovados(alunos);

// Exibe o resultado
console.log(alunosAprovados);
