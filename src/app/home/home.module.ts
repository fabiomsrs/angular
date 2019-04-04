import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule }  from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FieldsetModule} from 'primeng/fieldset';
import {CardModule} from 'primeng/card';
import {PanelModule} from 'primeng/panel';
import {ToolbarModule} from 'primeng/toolbar';
import {PasswordModule} from 'primeng/password';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoginComponent],
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
    RouterModule
  ]
})
export class HomeModule { }
