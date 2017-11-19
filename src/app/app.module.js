var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LoginPage } from './../pages/usuario/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { PontosTuristicosPage } from '../pages/pontos-turisticos/pontos-turisticos';
import { DetalhesPontoTuristicoPage } from '../pages/detalhes-ponto-turistico/detalhes-ponto-turistico';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CadastrarPontoTuristicoPage } from '../pages/cadastrar-ponto-turistico/cadastrar-ponto-turistico';
import { AuthProvider } from '../providers/auth';
import { CadastroPage } from '../pages/usuario/cadastro/cadastro';
import { RecuperarSenhaPage } from '../pages/usuario/recuperar-senha/recuperar-senha';
import { ListaAgendaCulturalPage } from '../pages/agenda-cultural/lista/lista-agenda-cultural';
import { DetalhesAgendaCulturalPage } from '../pages/agenda-cultural/detalhes/detalhes-agenda-cultural';
import { FormAgendaCulturalPage } from '../pages/agenda-cultural/form/form-agenda-cultural';
import { PontoTuristicoProvider } from '../providers/ponto-turistico';
export var firebaseConfig = {
    apiKey: "AIzaSyC0DzXuCJ4mybZt1USPmWrz2UJv26J2pps",
    authDomain: "rondo-tur.firebaseapp.com",
    databaseURL: "https://rondo-tur.firebaseio.com",
    projectId: "rondo-tur",
    storageBucket: "rondo-tur.appspot.com",
    messagingSenderId: "880349148178"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            MyApp,
            ListaAgendaCulturalPage,
            DetalhesAgendaCulturalPage,
            FormAgendaCulturalPage,
            CadastrarPontoTuristicoPage,
            DetalhesPontoTuristicoPage,
            LoginPage,
            PontosTuristicosPage,
            RecuperarSenhaPage,
            CadastroPage,
        ],
        imports: [
            BrowserModule,
            HttpModule,
            AngularFireDatabaseModule,
            AngularFireModule.initializeApp(firebaseConfig),
            IonicModule.forRoot(MyApp)
        ],
        bootstrap: [IonicApp],
        entryComponents: [
            MyApp,
            ListaAgendaCulturalPage,
            DetalhesAgendaCulturalPage,
            FormAgendaCulturalPage,
            CadastrarPontoTuristicoPage,
            DetalhesPontoTuristicoPage,
            LoginPage,
            PontosTuristicosPage,
            RecuperarSenhaPage,
            CadastroPage,
        ],
        providers: [
            StatusBar,
            SplashScreen,
            { provide: ErrorHandler, useClass: IonicErrorHandler },
            PontoTuristicoProvider,
            AuthProvider
        ]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map