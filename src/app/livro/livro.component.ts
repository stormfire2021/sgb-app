import { Component, OnInit } from '@angular/core';
import { categorias } from '../categoria';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {

  categorias = categorias;


  constructor() {

  }

  ngOnInit(): void {

  }


}
