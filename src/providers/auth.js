var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from "firebase";
var AuthProvider = (function () {
    function AuthProvider(http) {
        this.http = http;
        console.log('Hello AuthProvider Provider');
    }
    AuthProvider.prototype.loginUser = function (email, password) {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    };
    AuthProvider.prototype.signupUser = function (usuario) {
        return firebase
            .auth()
            .createUserWithEmailAndPassword(usuario.email, usuario.senha)
            .then(function (newUser) {
            firebase
                .database()
                .ref('/usuarios')
                .child(newUser.uid)
                .set({ nome: usuario.nome, email: usuario.email });
        });
    };
    AuthProvider.prototype.resetPassword = function (email) {
        return firebase.auth().sendPasswordResetEmail(email);
    };
    AuthProvider.prototype.logoutUser = function () {
        return firebase.auth().signOut();
    };
    return AuthProvider;
}());
AuthProvider = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], AuthProvider);
export { AuthProvider };
//# sourceMappingURL=auth.js.map