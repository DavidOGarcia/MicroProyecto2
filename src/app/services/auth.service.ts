import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  loginWithGoogle(): Promise<void>{
    return this.authLogin(new auth.GoogleAuthProvider()).then((response)=>{
      console.log(response.user.displayName, response.user.email);
    });
  }

  private authLogin(provider: auth.AuthProvider): Promise<auth.UserCredential>{
    return this.afAuth.signInWithPopup(provider);
  }

}
