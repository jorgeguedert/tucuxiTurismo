var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthProvider } from '../../../providers/auth/auth';
import { EmailValidator } from '../../../validators/email';
var RecuperarSenhaPage = (function () {
    function RecuperarSenhaPage(navCtrl, authProvider, formBuilder, alertCtrl) {
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.resetPasswordForm = formBuilder.group({
            email: ['',
                Validators.compose([Validators.required, EmailValidator.isValid])],
        });
    }
    RecuperarSenhaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResetPasswordPage');
    };
    RecuperarSenhaPage.prototype.resetPassword = function () {
        var _this = this;
        if (!this.resetPasswordForm.valid) {
            console.log(this.resetPasswordForm.value);
        }
        else {
            this.authProvider.resetPassword(this.resetPasswordForm.value.email)
                .then(function (user) {
                var alert = _this.alertCtrl.create({
                    message: "Nós enviamos para você um link para alteração de senha no seu email",
                    buttons: [
                        {
                            text: "Ok",
                            role: 'cancel',
                            handler: function () { _this.navCtrl.pop(); }
                        }
                    ]
                });
                alert.present();
            }, function (error) {
                var errorMessage = error.message;
                var errorAlert = _this.alertCtrl.create({
                    message: errorMessage,
                    buttons: [{ text: "Ok", role: 'cancel' }]
                });
                errorAlert.present();
            });
        }
    };
    return RecuperarSenhaPage;
}());
RecuperarSenhaPage = __decorate([
    Component({
        selector: 'page-recuperar-senha',
        templateUrl: 'recuperar-senha.html',
    }),
    __metadata("design:paramtypes", [NavController, typeof (_a = typeof AuthProvider !== "undefined" && AuthProvider) === "function" && _a || Object, FormBuilder,
        AlertController])
], RecuperarSenhaPage);
export { RecuperarSenhaPage };
var _a;
//# sourceMappingURL=recuperar-senha.js.map