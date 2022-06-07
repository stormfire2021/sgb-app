import { Component, Input, OnInit } from '@angular/core';
import { livros } from '../livro';
@Component({
  selector: 'app-livro-list',
  templateUrl: './livro-list.component.html',
  styleUrls: ['./livro-list.component.css']
})
export class LivroListComponent implements OnInit {
  @Input() livros = livros;
  displayedColumns = ['id', 'livro', 'autor', 'tipo', 'formato', 'categoria'];
  constructor() { }

  ngOnInit(): void {
  }

}
