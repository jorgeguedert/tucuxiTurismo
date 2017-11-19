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
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
var AgendaCultural = (function () {
    function AgendaCultural() {
    }
    return AgendaCultural;
}());
export { AgendaCultural };
var FormAgendaCulturalPage = (function () {
    function FormAgendaCulturalPage(navCtrl, navParams, af) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.af = af;
        this.listaRef = af.list('/AgendaCultural');
        this.lista = this.listaRef.valueChanges();
        this.agendaCultural = new AgendaCultural();
    }
    FormAgendaCulturalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventosCulturaisPage');
    };
    FormAgendaCulturalPage.prototype.cadastrar = function () {
        var _this = this;
        this.listaRef.push(this.agendaCultural).then(function () {
            _this.agendaCultural = new AgendaCultural();
        });
    };
    return FormAgendaCulturalPage;
}());
FormAgendaCulturalPage = __decorate([
    Component({
        selector: 'form-lista-agenda-cultural',
        templateUrl: 'form-agenda-cultural.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, AngularFireDatabase])
], FormAgendaCulturalPage);
export { FormAgendaCulturalPage };
//# sourceMappingURL=form-agenda-cultural.js.map