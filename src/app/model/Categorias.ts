export class Categoria {
  id:string;
  categoria:string;

  constructor(categoria: string) {
  this.id = String(Math.round(Math.random() * 100));
  this.categoria = categoria;

  }
}



