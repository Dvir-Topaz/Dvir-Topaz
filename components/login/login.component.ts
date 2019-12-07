import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    email: string;
    password: string;
    type: string;

    constructor(private loginService:loginService, private router: Router) { }

    ngOnInit() {
    }

    public login():void{
        // a method to send login request to server and get the  response
        this.loginService.login(this.email, this.password, this.type).subscribe( response => {
            if(response.startsWith("Error")){
                alert("Error! Try again...")
            }else {
            
                sessionStorage.token = response;

                this.router.navigate(["/admin"]);
            }
        } );
    }
    

}