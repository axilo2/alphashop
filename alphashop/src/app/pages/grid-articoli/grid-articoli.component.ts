import { Component, OnInit } from '@angular/core';
import { IArticoli } from 'src/app/Models/articoli';
import { ArticoliService } from 'src/services/articoli.service';

@Component({
  selector: 'app-grid-articoli',
  templateUrl: './grid-articoli.component.html',
  styleUrls: ['./grid-articoli.component.css']
})
export class GridArticoliComponent implements OnInit {

  articoli$: IArticoli[] = [];

  constructor(private articoliService: ArticoliService) { }

  ngOnInit(): void {
    this.articoli$ = this.articoliService.getArticoli();
    console.log(this.articoli$)
  }

  handleEdit = (codart: string) => {
    console.log('Cliccato tasto Modifica del codice ', + codart)
  }

  handleDelete = (codart: string) => {
    console.log('Cliccato tasto Elimina del codice ', + codart)

    this.articoli$.splice(this.articoli$.findIndex(x => x.codart === codart), 1);
    console.log(this.articoli$);
  }
}
