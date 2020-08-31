/*
Busca sequencial

Percorre a lista de valorese busca de um valor especificado.
Quando encontraro valor , retorna a posição correspondente a ele.
Quando não encontra, retorna o valor convencional -1.

*/
[
    2,3,4,5,6,8,9,11,67,34,89,123,134,145,178,189,199,
    345,321,378,390,415,456,476,498,499,523
]

function buscaSequencial(lista,valor){
//percurso do vetor da lista
for(let i = 0; i < lista.length; i++) {
if(lista[i] === valoBusca) return i // Encontrou
}
return -1
}

//Usando a função buscaSequencial para procurar um valor
console.time('2') //Inicia o cronômetro chamado '2'
console.log(buscaSequencial(primos,2))

function buscaSequencial2(lista,valor, fnComp){
//percurso do vetor da lista
for(let i = 0; i < lista.length; i++) {
//estamos chamando uma função externa para fazer a comparação
if(fnComp(lista[i], valorBusca)) return i // Encontrou
}
return -1 // Não encontrou
}