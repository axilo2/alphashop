import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SalutiDataService } from 'src/services/data/saluti-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  titolo: string = "Benvenuti in Alphashop";
  sottotitolo: string = "Visualizza le offerte del giorno";

  utente: string = "";

  constructor(private route: ActivatedRoute, private salutiSrv: SalutiDataService) { }

  ngOnInit(): void {
    this.utente = this.route.snapshot.params['userid'];
  }

  saluti: string = "";
  errore: string = "";

  getSaluti = () : void => {
    this.salutiSrv.getSaluti(this.utente).subscribe({
      next: this.handleResponse.bind(this),
      error: this.handleError.bind(this)
    });
  }

  handleResponse = (response : Object) => {
    this.saluti = response.toString();
  }

  handleError = (error : any) => {
    console.log(this.saluti)
   // this.saluti = error.toString();
   this.errore = error.error.message;

  }

}
