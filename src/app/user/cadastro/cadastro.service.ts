import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { User } from '../user';
import { FileUpload } from 'primeng/fileupload';
import { map } from 'rxjs/operators';

const API_URL = "http://localhost:8080";
const MUNICIPIO_URL = "http://10.2.9.40:8080"
@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  
  constructor(private http: HttpClient) {}

  cadastrar(user: User) {                
            
      return this.http.post(
        MUNICIPIO_URL + "/usuarios/",
        user,
        { observe: 'response'}
      );
  }

  upload(id: any, file: File){
      let formData = new FormData();
      console.log("@@")
      console.log(id)
      formData.append('file', file)
      return this.http.post(
        MUNICIPIO_URL + "/usuarios/"+id as string+"/documentos",
        formData,
        { observe: 'response'}
      ).subscribe(res => console.log(res), err => console.log(err));
  } 

  municipios(){
    return this.http.get(
      MUNICIPIO_URL + "/municipios",            
    )
  }
}
