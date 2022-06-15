import { ListCategoriasService } from './../service/list-categorias.service';
import { Categoria } from './../model/Categorias';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  @ViewChild('formCategoria') formCategoria!: NgForm;

  cat!: Categoria;
  categorias?: Categoria[];

  constructor(private listCategoria : ListCategoriasService) {
    this.getCategorias();
  }

  ngOnInit(): void {
      this.cat = new Categoria('');
      this.getCategorias();
  }

  getCategorias(): void {
    this.listCategoria.getAll().subscribe((categorias) => this.categorias = categorias);
   }

  onSubmit() : void {
    this.listCategoria.addCategoria(this.cat);
    this.formCategoria.reset();

  }
  onDelete(id:string){

    let confirm = window.confirm('Deseja Realmente remover o registro' + id);
    if (!confirm) {
      return;
    }else{
      this.listCategoria.deleteCategoria(id);

    }
  }
}
