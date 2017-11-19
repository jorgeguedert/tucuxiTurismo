import { LinhaTempoPage } from './../pages/historia/linha-tempo/linha-tempo';
import { ListaPontoTuristicoPage } from '../pages/pontos-turisticos/lista/lista-ponto-turistico';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';

import { LoginPage } from '../pages/usuario/login/login';
//import { AgendaCulturalPage } from '../pages/agenda-cultural/agenda-cultural';

import { AuthProvider } from '../providers/auth';
import { ListaAgendaCulturalPage } from '../pages/agenda-cultural/lista/lista-agenda-cultural';

const firebaseConfig = {
  apiKey: "AIzaSyC0DzXuCJ4mybZt1USPmWrz2UJv26J2pps",
  authDomain: "rondo-tur.firebaseapp.com",
  databaseURL: "https://rondo-tur.firebaseio.com",
  projectId: "rondo-tur",
  storageBucket: "rondo-tur.appspot.com",
  messagingSenderId: "880349148178"
};

firebase.initializeApp(firebaseConfig);

const unsubscribe = firebase.auth().onAuthStateChanged( user => {
  if (!user) {
    this.rootPage = LoginPage;
    unsubscribe();
  } else { 
    this.rootPage = ListaAgendaCulturalPage;
    unsubscribe();
  }
});

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //rootPage: any = HomePage;
  rootPage = LoginPage;
  authProvider:AuthProvider;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      //{ title: 'Início', component: AgendaCulturalPage },
      { title: 'Agenda Cultural', component: ListaAgendaCulturalPage },
      { title: 'Pontos Turisticos', component: ListaPontoTuristicoPage },
      { title:'História de Rondônia', component:LinhaTempoPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout(){  
    firebase.auth().signOut();
    this.nav.setRoot(LoginPage);
  }
}

