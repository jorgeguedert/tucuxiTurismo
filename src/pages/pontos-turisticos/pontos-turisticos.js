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
import { AngularFireDatabase } from "angularfire2/database";
import { DetalhesPontoTuristicoPage } from '../detalhes-ponto-turistico/detalhes-ponto-turistico';
var Comentario = (function () {
    function Comentario() {
    }
    return Comentario;
}());
export { Comentario };
var PontoTuristico = (function () {
    function PontoTuristico() {
    }
    return PontoTuristico;
}());
export { PontoTuristico };
var PontosTuristicosPage = (function () {
    function PontosTuristicosPage(navCtrl, navParams, af) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.af = af;
        this.lista = this.af.list('/PontosTuristicos');
        this.pontoTuristico = new PontoTuristico();
    }
    PontosTuristicosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PontosTuristicosPage');
    };
    PontosTuristicosPage.prototype.editar = function (id) {
    };
    PontosTuristicosPage.prototype.detalhesPontoTuristico = function (pontoTur) {
        this.navCtrl.push(DetalhesPontoTuristicoPage, {
            pontoTuristico: pontoTur
        });
    };
    PontosTuristicosPage.prototype.cadastrar = function () {
        var _this = this;
        this.lista.push(this.pontoTuristico).then(function () {
            _this.pontoTuristico = new PontoTuristico();
        });
    };
    return PontosTuristicosPage;
}());
PontosTuristicosPage = __decorate([
    Component({
        selector: 'page-pontos-turisticos',
        templateUrl: 'pontos-turisticos.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, AngularFireDatabase])
], PontosTuristicosPage);
export { PontosTuristicosPage };
//# sourceMappingURL=pontos-turisticos.js.map