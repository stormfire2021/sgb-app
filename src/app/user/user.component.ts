import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BehaviorSubject, ConnectableObservable } from 'rxjs';
import { User } from '../model/User';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  user!: User;
  users: User[];
  usersModify?: User[];
  userRepassword: string = '';
  valorArray!: BehaviorSubject<number>;

  constructor( private userService : UserService) {
    this.users = []
    this.getAll();
  }

  ngOnInit(): void {
    this.user = new User('','','','')
  }

  onSubmit() : void {
    if(this.isExist(this.user.username)){
        this.users =  this.users.filter((u) => {
          return u.username?.valueOf() != this.user.username?.valueOf();
        });
        this.users.push(this.user);
        localStorage.setItem('user', JSON.stringify(this.users))
        this.form.reset();
        this.getAll();
    }else{
      this.users.push(this.user);
      localStorage.setItem('user', JSON.stringify(this.users))
      this.form.reset();
      this.getAll();
    }

  }

  getAll() : void{
     this.users = JSON.parse(localStorage.getItem('user')!);
  }

  onUpdate(user: User) : void {
    const usuario : User = user;
    this.user = usuario;
  }

  isExist(value: string): boolean {

    for (let u of this.users) {
      if (u.username?.valueOf() == value?.valueOf()) {
          return true;
      }
    }
    return false;
  }
}
