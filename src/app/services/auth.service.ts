import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, User } from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  loginWithGoogle(): Promise<void>{
    return this.authLogin(new auth.GoogleAuthProvider()).then((response)=>{
      localStorage.setItem('user', JSON.stringify(response.user))
    });
  }

  getCurrentUser(): Observable<User>{
    return this.afAuth.authState;
  }

  isAuthenticated(): boolean{
    const user: User = JSON.parse(localStorage.getItem('user'))?? null;
    return user !==null;
  }

  logout(){
    return this.afAuth.signOut().then(()=>{
      localStorage.removeItem('user');
    }).catch(error=>{});
  }

  private authLogin(provider: auth.AuthProvider): Promise<auth.UserCredential>{
    return this.afAuth.signInWithPopup(provider);
  }

}
