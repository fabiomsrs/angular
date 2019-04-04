import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { CadastroComponent } from './user/cadastro/cadastro.component';
import { RecuperarSenhaComponent } from './user/recuperar-senha/recuperar-senha.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'user/cadastro',
    component: CadastroComponent
  },
  {
    path: 'user/recuperar_senha',
    component: RecuperarSenhaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
