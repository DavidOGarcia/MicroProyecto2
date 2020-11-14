import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  loginGoogle(){
    try {
      return this.afAuth.signInWithPopup(new auth.GoogleAuthProvider())
    } catch (error) {
      console.log(error)}
  }

}
