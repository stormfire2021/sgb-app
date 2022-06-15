export class Livro {
  id: string;
  livro: string;
  autor: string;
  editora: string;
  tipo: string;
  categoria: string;

  constructor( livro: string, autor: string, editora: string, tipo: string,
    categoria: string) {
    this.id = String(Math.round(Math.random() * 100));
    this.livro = livro;
    this.autor = autor;
    this.editora = editora;
    this.tipo = tipo;
    this.categoria = categoria;
  }



}
