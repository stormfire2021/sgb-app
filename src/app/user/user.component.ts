import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../model/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user!: User;
  users: User[];

  formulario: any;
  constructor() {
    this.users = []
  }

  ngOnInit(): void {
     this.getAll();
     this.formulario = new FormGroup({
      id: new FormControl(),
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      permission: new FormControl()
     })


  }

  onSubmit() : void {
    this.formulario.value.id = String(Math.round(Math.random() * 100));
    const usuario : User = this.formulario.value;
    this.users.push(usuario);
    localStorage.setItem('user', JSON.stringify(this.users))
    this.formulario.reset();
  }

  getAll() : void{
    if(localStorage.getItem('user')){
      this.users = JSON.parse(localStorage.getItem('user')!);
    }else{
      this.users = [];
    }

  }
}
