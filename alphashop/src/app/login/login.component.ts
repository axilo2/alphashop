import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId: string = "Marco";
  password: string = "";

  autenticato: boolean = true;
  consentito: boolean = false;

  errMsg: string = "Spiacenti, la userId e/o password sono errati!";
  okMsg: string = "Accesso consentito!";

  constructor() { }

  ngOnInit(): void {
  }

  gestAuth = (): void => {
    console.log(this.userId);

    if(this.userId === "Marco" && this.password === "123_Stella") {
      this.autenticato = true;
      this.consentito = true;
    }else{
      this.autenticato = false;
      this.consentito = false;
    }
  }

}
