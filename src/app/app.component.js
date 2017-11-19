var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _this = this;
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from "firebase";
import { LoginPage } from '../pages/usuario/login/login';
import { PontosTuristicosPage } from '../pages/pontos-turisticos/pontos-turisticos';
import { ListaAgendaCulturalPage } from '../pages/agenda-cultural/lista/lista-agenda-cultural';
var firebaseConfig = {
    apiKey: "AIzaSyC0DzXuCJ4mybZt1USPmWrz2UJv26J2pps",
    authDomain: "rondo-tur.firebaseapp.com",
    databaseURL: "https://rondo-tur.firebaseio.com",
    projectId: "rondo-tur",
    storageBucket: "rondo-tur.appspot.com",
    messagingSenderId: "880349148178"
};
firebase.initializeApp(firebaseConfig);
var unsubscribe = firebase.auth().onAuthStateChanged(function (user) {
    if (!user) {
        _this.rootPage = LoginPage;
        unsubscribe();
    }
    else {
        _this.rootPage = ListaAgendaCulturalPage;
        unsubscribe();
    }
});
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        //rootPage: any = HomePage;
        this.rootPage = LoginPage;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            //{ title: 'Início', component: AgendaCulturalPage },
            { title: 'Agenda Cultural', component: ListaAgendaCulturalPage },
            { title: 'Pontos Turisticos', component: PontosTuristicosPage },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logout = function () {
        firebase.auth().signOut();
        this.nav.setRoot(LoginPage);
    };
    return MyApp;
}());
__decorate([
    ViewChild(Nav),
    __metadata("design:type", Nav)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Component({
        templateUrl: 'app.html'
    }),
    __metadata("design:paramtypes", [Platform, StatusBar, SplashScreen])
], MyApp);
export { MyApp };
//# sourceMappingURL=app.component.js.map