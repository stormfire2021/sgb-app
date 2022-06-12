import { LoginComponent } from './login/login.component';
import { LivroComponent } from './livro/livro.component';
import { LivroListComponent } from './livro-list/livro-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: LivroListComponent },
  { path: 'livro', component: LivroComponent },
  { path: 'login', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
