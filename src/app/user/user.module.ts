import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule }  from '@angular/forms';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FieldsetModule} from 'primeng/fieldset';
import {CardModule} from 'primeng/card';
import {PanelModule} from 'primeng/panel';
import {ToolbarModule} from 'primeng/toolbar';
import {PasswordModule} from 'primeng/password';
import {FileUploadModule} from 'primeng/fileupload';
import {DropdownModule} from 'primeng/dropdown';
import {ListboxModule} from 'primeng/listbox';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';

@NgModule({
  declarations: [CadastroComponent, RecuperarSenhaComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,    
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule,
    FieldsetModule,
    CardModule,
    PanelModule,
    ToolbarModule,
    PasswordModule,
    FileUploadModule,
    DropdownModule,
    ListboxModule
  ]
})
export class UserModule { }
