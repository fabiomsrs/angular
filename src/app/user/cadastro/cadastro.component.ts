import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { SelectItem } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload';
import { User } from '../user';
import { CadastroService } from './cadastro.service';


interface Documento {
  name: string;    
}

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  
  form: FormGroup;  
  tiposDocumento: SelectItem[]
  cpffile: File
  municipios: any[]
  userSaved: User


  constructor(
    private formBuilder: FormBuilder,
    private cadastroService :CadastroService,   
    private router: Router) {
      this.tiposDocumento = [
        {label:'Selecione tipo de Documento', value:null},
        {label:'Carteira de Motorista', value:'Carteira de Motorista'},
        {label:'RG', value:'RG'},
        {label:'outros', value:'outros'}        
      ];                 
    }    

  ngOnInit() { 
    this.cadastroService.municipios().subscribe((res: any[])=>{      
      this.municipios = res;           
    })    
    this.form = this.formBuilder.group({
      cpf: ['', [Validators.required,]],
      nome: ['',[Validators.required,]],
      rg: ['',[Validators.required,]],
      email: ['',[Validators.required,]],
      confirmaemail: ['',[Validators.required,]],
      senha: ['',[Validators.required,]],      
      confirmasenha: ['',[Validators.required,]],      
      documentoSelecionado: ['',[Validators.required,]],
      municipio:['',[Validators.required,]],
      logradouro: ['',[Validators.required,]],
      numero: ['',[Validators.required,]],
      complemento: ['',[Validators.required,]],
      bairro: ['',[Validators.required,]],
      cep: ['',[Validators.required,]],      
      celular: ['',[Validators.required,]],
      telefone: ['',[Validators.required,]]      
    }
  )
  }

  salvar(){    
    const user = this.form.getRawValue() as User;      
    console.log(this.form.getRawValue())    
    this.cadastroService.cadastrar(user)
    .subscribe(res => this.cadastroService.upload((res.body as User).id, this.cpffile), err => console.log(err))    
    
  }

  onUpload(event) {    
    for(let file of event.files) {
        this.cpffile = file;                
    }        
}

}
