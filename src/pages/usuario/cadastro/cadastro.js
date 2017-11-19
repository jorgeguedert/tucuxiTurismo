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
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthProvider } from '../../../providers/auth/auth';
import { EmailValidator } from '../../../validators/email';
import { PasswordValidation } from '../../../validators/password';
var CadastroPage = (function () {
    function CadastroPage(navCtrl, authProvider, formBuilder, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.signupForm = formBuilder.group({
            nome: ['',
                Validators.compose([Validators.minLength(4), Validators.required])],
            email: ['',
                Validators.compose([Validators.required, EmailValidator.isValid])],
            senha: ['',
                Validators.compose([Validators.minLength(6), Validators.required])],
            confirmSenha: ['',
                Validators.compose([Validators.minLength(6), Validators.required])]
        }, {
            validator: PasswordValidation.MatchPassword
        });
    }
    CadastroPage.prototype.signupUser = function () {
        var _this = this;
        if (!this.signupForm.valid) {
            console.log(this.signupForm.value);
        }
        else {
            debugger;
            this.authProvider.signupUser(this.signupForm.value)
                .then(function () {
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
    return CadastroPage;
}());
CadastroPage = __decorate([
    Component({
        selector: 'page-cadastro',
        templateUrl: 'cadastro.html',
    }),
    __metadata("design:paramtypes", [NavController, typeof (_a = typeof AuthProvider !== "undefined" && AuthProvider) === "function" && _a || Object, FormBuilder,
        LoadingController,
        AlertController])
], CadastroPage);
export { CadastroPage };
var _a;
//# sourceMappingURL=cadastro.js.map