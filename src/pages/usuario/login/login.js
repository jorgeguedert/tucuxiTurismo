var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ListaAgendaCulturalPage } from '../../agenda-cultural/lista/lista-agenda-cultural';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoadingController, AlertController, MenuController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { EmailValidator } from '../../../validators/email';
import { AuthProvider } from '../../../providers/auth/auth';
import firebase from "firebase";
import { CadastroPage } from '../cadastro/cadastro';
import { RecuperarSenhaPage } from './../recuperar-senha/recuperar-senha';
var LoginPage = (function () {
    function LoginPage(navCtrl, loadingCtrl, alertCtrl, authProvider, formBuilder, navParams, menu) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.authProvider = authProvider;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.menu = menu;
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                navCtrl.setRoot(ListaAgendaCulturalPage);
            }
        });
        this.loginForm = formBuilder.group({
            email: ['',
                Validators.compose([Validators.required, EmailValidator.isValid])],
            password: ['',
                Validators.compose([Validators.minLength(6), Validators.required])]
        });
        this.menu.enable(false);
    }
    LoginPage.prototype.ionViewDidLoad = function () {
    };
    LoginPage.prototype.loginUser = function () {
        var _this = this;
        if (!this.loginForm.valid) {
            console.log(this.loginForm.value);
        }
        else {
            this.authProvider.loginUser(this.loginForm.value.email, this.loginForm.value.password)
                .then(function (authData) {
                _this.loading.dismiss().then(function () {
                    _this.navCtrl.setRoot(ListaAgendaCulturalPage);
                });
            }, function (error) {
                _this.loading.dismiss().then(function () {
                    var alert = _this.alertCtrl.create({
                        message: error.message,
                        buttons: [
                            {
                                text: "Ok",
                                role: 'cancel'
                            }
                        ]
                    });
                    alert.present();
                });
            });
            this.loading = this.loadingCtrl.create();
            this.loading.present();
        }
    };
    LoginPage.prototype.goToSignup = function () {
        this.navCtrl.push(CadastroPage);
    };
    LoginPage.prototype.goToResetPassword = function () {
        this.navCtrl.push(RecuperarSenhaPage);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Component({
        selector: 'page-login',
        templateUrl: 'login.html',
    }),
    __metadata("design:paramtypes", [NavController,
        LoadingController,
        AlertController, typeof (_a = typeof AuthProvider !== "undefined" && AuthProvider) === "function" && _a || Object, FormBuilder,
        NavParams,
        MenuController])
], LoginPage);
export { LoginPage };
var _a;
//# sourceMappingURL=login.js.map