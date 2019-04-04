import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.component.html',
  styleUrls: ['./recuperar-senha.component.css']
})
export class RecuperarSenhaComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    // private loginService :LoginService,    
    private router: Router) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      cpf: ['', [Validators.required,]],
      email: ['', [Validators.required,]],
    })
  }

  recuperarSenha(){
    const login = this.form.getRawValue(); 
    console.log(login);           
  }

}
