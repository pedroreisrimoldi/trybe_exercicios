const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
 /* 🚀 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
Dica: use a função find.*/
  function authorBornIn1947(books, anoNascimento) {
    const livro = books.find((elemento) => elemento.author.birthYear === anoNascimento) 
    return livro.author.name
    }
    
  console.log(authorBornIn1947(books, 1947));

 //Retorne o nome do livro de menor nome.
 //Dica: use a função forEach.
 function smallerName(books) {
  let nameBook;
  books.forEach((elemento) => {
    if(!nameBook || elemento.name.length < nameBook.length){
      nameBook = elemento.name
    }
  })
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}
console.log(smallerName(books));

//3 - Encontre o primeiro livro cujo nome possui 26 caracteres.
function getNamedBook(books, tamanho) {
  const maiorTitulo = books.find((elemento) => elemento.name.length === tamanho)
  console.log(maiorTitulo);
}
getNamedBook(books, 26);

//4 - Ordene os livros por data de lançamento em ordem decrescente.
function booksOrderedByReleaseYearDesc(parametro) {
  const ordenar = Object.values(parametro).sort((a, b) => a.releaseYear - b.releaseYear)
  console.log(ordenar);
}
booksOrderedByReleaseYearDesc(books)

//🚀 5 - Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.
function everyoneWasBornOnSecXX(parametro) {
 const verificacao = Object.values(parametro).every((nascimento) => nascimento.author.birthYear >= 1900 && nascimento.author.birthYear < 2000)
 console.log(verificacao);
}
everyoneWasBornOnSecXX(books)

//🚀 6 - Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.
function someBookWasReleaseOnThe80s(parametro) {
 const verificacao = Object.values(parametro).some((elemento) => elemento.releaseYear > 1979 && elemento.releaseYear <=1989)
 console.log(verificacao);
}
someBookWasReleaseOnThe80s(books)


//7 - Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.
function authorUnique(parametro, ano) {
  const verificacao = Object.values(parametro).some((nascimento) => nascimento.author.birthYear === ano)
  console.log(verificacao);
}
authorUnique(books, 1947)