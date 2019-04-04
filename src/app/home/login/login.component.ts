import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from './login';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private loginService :LoginService,    
    private router: Router) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      cpf: ['', [Validators.required,]],
      senha: ['', [Validators.required,]],
    })
  }

  login(){
    const login = this.form.getRawValue() as Login;     
    this.loginService.login(login)    
    .subscribe(() => this.router.navigate(['user/cadastro']), err => console.log(err))    
  }


}
