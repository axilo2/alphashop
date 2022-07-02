import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthappService } from 'src/services/authapp.service';

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

  constructor(private route: Router, private basicAuth: AuthappService) { }

  ngOnInit(): void {
  }

  gestAuth = (): void => {
    console.log(this.userId);

    if(this.basicAuth.autentica(this.userId, this.password)) {
      this.route.navigate(['welcome', this.userId]);

      this.autenticato = true;
    }else{
      this.autenticato = false;
    }
  }

}
