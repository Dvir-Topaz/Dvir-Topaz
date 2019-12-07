import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class loginService {

    constructor(private client: HttpClient) { }

    public login(email: string, password: string, type: string){
        return this.client.post("http://localhost:8080/login/" + email +"/" + password + "/" + type, 
                null, {responseType: 'text'});
    }
}