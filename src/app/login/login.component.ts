import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('formLogin') formLogin!: NgForm;

  email!: string;
  senha!: string;


  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.email = '';
    this.senha = '';

  }

  onSubmit(): void{

    if((this.email === 'sheldor@gmail.com') && (this.senha === 'cooper')){
      this.router.navigate(['/', 'home']);
      this.formLogin.reset();

    }else{
      window.alert("USUARIO NÃO AUTORIZADO! \n FALE COM FABIULA!");
      this.formLogin.reset();
    }

  }

}
