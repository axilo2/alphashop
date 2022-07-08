import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalutiDataService {

  constructor(private http: HttpClient) { }

  getSaluti = (nome : string) : Observable<Object> => this.http.get("http://localhost:8080/api/saluti/" + nome);
}
