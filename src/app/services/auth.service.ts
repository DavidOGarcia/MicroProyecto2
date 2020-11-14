import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  //Metodo para hacer login con Google

  loginWithGoogle(): Promise<void>{
    return this.authLogin(new auth.GoogleAuthProvider())
    .then((response)=>{
      if (response){
        localStorage.setItem('user', JSON.stringify(response));
      }
    })
    .catch((err) => console.log(err));
  }

  
}
