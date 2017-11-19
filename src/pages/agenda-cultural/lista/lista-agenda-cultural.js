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
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { DetalhesAgendaCulturalPage } from '../detalhes/detalhes-agenda-cultural';
var AgendaCultural = (function () {
    function AgendaCultural() {
    }
    return AgendaCultural;
}());
export { AgendaCultural };
var ListaAgendaCulturalPage = (function () {
    function ListaAgendaCulturalPage(navCtrl, navParams, af, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.af = af;
        this.menu = menu;
        this.listaRef = af.list('/AgendaCultural');
        this.lista = this.listaRef.valueChanges();
        this.agendaCultural = new AgendaCultural();
        this.menu.enable(true);
    }
    ListaAgendaCulturalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventosCulturaisPage');
    };
    ListaAgendaCulturalPage.prototype.detalhesAgendaCultural = function (agendaCultural) {
        this.navCtrl.push(DetalhesAgendaCulturalPage, {
            agendaCultural: agendaCultural
        });
    };
    ListaAgendaCulturalPage.prototype.cadastrar = function () {
        var _this = this;
        this.listaRef.push(this.agendaCultural).then(function () {
            _this.agendaCultural = new AgendaCultural();
        });
    };
    return ListaAgendaCulturalPage;
}());
ListaAgendaCulturalPage = __decorate([
    Component({
        selector: 'page-lista-agenda-cultural',
        templateUrl: 'lista-agenda-cultural.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, AngularFireDatabase, MenuController])
], ListaAgendaCulturalPage);
export { ListaAgendaCulturalPage };
//# sourceMappingURL=lista-agenda-cultural.js.map