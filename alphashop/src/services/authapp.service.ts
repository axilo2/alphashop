import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthappService {

  constructor() { }

  autentica = (userid: string, password: string): boolean => {
    const retVal = (userid === "Marco" && password === "123_Stella") ? true : false;
    if(retVal){
      sessionStorage.setItem("Utente", userid);
    }
    return retVal;
  }
}
