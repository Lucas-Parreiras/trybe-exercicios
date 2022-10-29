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

// Adicione o código do exercício aqui:
// Exercício 1

function authorBornIn1947(array) {
 return array.find( (author) => author.author.birthYear === 1947).author.name
};

console.log(authorBornIn1947(books));

// Exercício 2

function smallerName(array) {
  let nameBook;
  
  array.forEach( (smallName) => {
    if (!nameBook || smallName.name.length < nameBook.length) {
      nameBook = smallName.name;
    }
   } )

  return nameBook;
}

console.log(smallerName(books));

// Exercício 3

function getNamedBook(array) {
    return array.find( (book) => book.name.length === 26 ).name;
}

console.log(getNamedBook(books));

//Exercício 4

function booksOrderedByReleaseYearDesc(array) {
  return array.sort( (a, b) => b.releaseYear - a.releaseYear )
}
console.log(booksOrderedByReleaseYearDesc(books));