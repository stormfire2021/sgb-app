export interface Livro {
  idLivro: number;
  livro: string;
  autor: string;
  editora: string;
  tipo: number;
  formato: string;
  categoria: string;

}
export const  livros = [
  {
    idLivro: 1,
    livro: 'Programação em java',
    autor: 'Fulano',
    editora: 'Nois tenta',
    tipo: 1,
    formato: 0,
    categoria: 'Programação',
  },
  {
    idLivro: 2,
    livro: 'Senhor dos Aneis',
    autor: 'J. R. R. Tolkien',
    editora: 'Europa America',
    tipo: 1,
    formato: 0,
    categoria: 'Literatura',
  },
  {
    idLivro: 3,
    livro: 'DBase lll Plus',
    autor: 'LALALALA',
    editora: 'So Deus Sabe',
    tipo: 2,
    formato: 1,
    categoria: 'Banco de Dados',
  },
  {
    idLivro: 4,
    livro: 'Atlas Geografico',
    autor: '1956',
    editora: 'Mundo',
    tipo: 1,
    formato: 0,
    categoria: 'Geografia',
  },
  {
    idLivro: 5,
    livro: 'JavaScript para iniciantes',
    autor: 'Alguem Inteligente',
    editora: 'Nois Tenta',
    tipo: 2,
    formato: 2,
    categoria: 'Programação',
  },
  {
    idLivro: 6,
    livro: 'The Big Bang Theory',
    autor: 'Chuck Lore',
    editora: 'Wanner Bros',
    tipo: 2,
    formato: 3,
    categoria: 'HQ',
  },
  {
    idLivro: 7,
    livro: 'Sherlock Holmes',
    autor: 'Arthur Conan Doyle',
    editora: 'Boa Pergunta',
    tipo: 1,
    formato: 0,
    categoria: 'Literatura',
  },
  {
    idLivro: 8,
    livro: 'Star Trek',
    autor: 'Gene Roddenberry',
    editora: '1960 Original',
    tipo: 2,
    formato: 3,
    categoria: 'Ficção Cientifica',
  },
  {
    idLivro: 9,
    livro: 'Star Wars',
    autor: 'George Lucas',
    editora: 'Esquecendo Jar Jar Binks',
    tipo: 2,
    formato: 3,
    categoria: 'Ficção Cientifica',
  },
  {
    idLivro: 10,
    livro: 'Akira',
    autor: 'Katsuhiro Otomo',
    editora: 'Vicio',
    tipo: 2,
    formato: 2,
    categoria: 'Mangá',
  },
  {
    idLivro: 11,
    livro: 'X-Men #4',
    autor: 'Stan Lee',
    editora: 'Marvel Comics',
    tipo: 1,
    formato: 0,
    categoria: 'HQ',
  }
];
