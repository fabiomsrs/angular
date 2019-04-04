import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from './login';
import { tap } from 'rxjs/operators';
import { TokenService } from './token/token.service';
import { tokenKey } from '@angular/core/src/view';

const API_URL = "http://localhost:8080/commons/oauth/token";

@Injectable({
  providedIn: 'root'
})
export class LoginService {    

    constructor(private http: HttpClient, private token: TokenService) {}

    login(login: Login) {    
        let httpHeaders = new HttpHeaders({
            'Content-Type' : 'application/x-www-form-urlencoded',
            "Authorization": "Basic Z2VzdG9yLXdlYjp0YzNwIQ=="                        
        });    
        
        return this.http.post(            
            API_URL,"client_id=gestor-web&username="+login.cpf+"&password="+login.senha+"&grant_type=password",
            {
                headers: httpHeaders,
                observe: 'response'
            }
        ).pipe(tap(res => {
            const authToken = res.body['access_token'];         
            this.token.setToken(authToken);
        })
        );
    }
}
