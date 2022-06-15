
import { Categoria } from './../model/Categorias';
import { Livro } from '../model/Livros';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ListCategoriasService } from '../service/list-categorias.service';
import { NgForm } from '@angular/forms';
import { ListLivosService } from '../service/list-livos.service';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  categorias: Categoria[] =[];

  liv!: Livro;
  livs?: Livro[];


  constructor( private listCategoria : ListCategoriasService, private listaService : ListLivosService) {
     this.getCategorias();
     this.getLivros();
  }

  ngOnInit(): void {
    this.liv = new Livro('', '', '', '', '');
  }

  getCategorias(): void {
    this.listCategoria.getAll().subscribe((categorias) => this.categorias = categorias);
   }

   getLivros(): void{
    this.listaService.getAll().subscribe((livs) => this.livs = livs);
  }


   onSubmit() {
      this.listaService.addLivro(this.liv);
      this.form.reset();
   }


}
