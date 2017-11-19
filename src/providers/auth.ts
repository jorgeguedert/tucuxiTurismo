import { Usuario } from './../models/usuario';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from "firebase";

@Injectable()
export class AuthProvider {

  constructor(public http: Http) {
    console.log('Hello AuthProvider Provider');
  }
  
  loginUser(email: string, password: string): any {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }


  signupUser(usuario:Usuario): any {
    return firebase
    .auth()
    .createUserWithEmailAndPassword(usuario.email, usuario.senha)
      .then( newUser => {
          firebase
      .database()
      .ref('/usuarios')
      .child(newUser.uid)
          .set({nome:usuario.nome, email:usuario.email});
    });
  }

  resetPassword(email: string): any {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  public logoutUser(): any {
    return firebase.auth().signOut();
  }


}
