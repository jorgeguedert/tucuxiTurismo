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
import { PontoTuristico } from '../pontos-turisticos/pontos-turisticos';
/**
 * Generated class for the CadastrarPontoTuristicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastrarPontoTuristicoPage = (function () {
    function CadastrarPontoTuristicoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pontoTuristico = navParams.get('pontoTuristico');
    }
    CadastrarPontoTuristicoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastrarPontoTuristicoPage');
    };
    CadastrarPontoTuristicoPage.prototype.cadastrar = function () {
        var _this = this;
        this.lista.push(this.pontoTuristico).then(function () {
            _this.pontoTuristico = new PontoTuristico();
        });
    };
    return CadastrarPontoTuristicoPage;
}());
CadastrarPontoTuristicoPage = __decorate([
    Component({
        selector: 'page-cadastrar-ponto-turistico',
        templateUrl: 'cadastrar-ponto-turistico.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams])
], CadastrarPontoTuristicoPage);
export { CadastrarPontoTuristicoPage };
//# sourceMappingURL=cadastrar-ponto-turistico.js.map