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
import { AngularFireDatabase } from 'angularfire2/database';
var PontoTuristicoProvider = (function () {
    function PontoTuristicoProvider(http, af) {
        this.http = http;
        this.af = af;
        console.log('Hello PontoTuristicoProvider Provider');
    }
    PontoTuristicoProvider.prototype.consultaListaPontosTuristicos = function () {
        return this.af.list('/PontosTuristicos');
    };
    return PontoTuristicoProvider;
}());
PontoTuristicoProvider = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http, AngularFireDatabase])
], PontoTuristicoProvider);
export { PontoTuristicoProvider };
//# sourceMappingURL=ponto-turistico.js.map