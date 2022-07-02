import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  titolo: string = "Accesso & Autenticazione";
  sottotitolo: string = "Inserisci UserId e Password";


  userId: string = "Marco";
  password: string = "";

  autenticato: boolean = true;

  errMsg: string = "Spiacenti, la userId e/o password sono errati!";

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  gestAuth = (): void => {
    console.log(this.userId);

    if(this.userId === "Marco" && this.password === "123_Stella") {
      this.route.navigate(['welcome', this.userId]);

      this.autenticato = true;
    }else{
      this.autenticato = false;
    }
  }

}
