import { FormPontoTuristicoPage } from './../pages/pontos-turisticos/form/form-ponto-turistico';
import { ListaPontoTuristicoPage } from './../pages/pontos-turisticos/lista/lista-ponto-turistico';
import { UsuarioProvider } from './../providers/usuario';
import { AgendaCulturalProvider } from './../providers/agenda-cultural';
import { LoginPage } from './../pages/usuario/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule} from 'angularfire2/database-deprecated';
import { Ionic2RatingModule } from 'ionic2-rating';

import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ImagePicker } from '@ionic-native/image-picker';
import { File } from '@ionic-native/file';
import { Geolocation } from '@ionic-native/geolocation';
import { AuthProvider } from '../providers/auth';
import { CadastroPage } from '../pages/usuario/cadastro/cadastro';
import { RecuperarSenhaPage } from '../pages/usuario/recuperar-senha/recuperar-senha';
import { ListaAgendaCulturalPage } from '../pages/agenda-cultural/lista/lista-agenda-cultural';
import { DetalhesAgendaCulturalPage } from '../pages/agenda-cultural/detalhes/detalhes-agenda-cultural';
import { FormAgendaCulturalPage } from '../pages/agenda-cultural/form/form-agenda-cultural';

import { PontoTuristicoProvider } from '../providers/ponto-turistico';
import { DetalhesPontoTuristicoPage } from '../pages/pontos-turisticos/detalhes/detalhes-ponto-turistico';
import { LinhaTempoPage } from '../pages/historia/linha-tempo/linha-tempo';



export const firebaseConfig = {
  apiKey: "AIzaSyC0DzXuCJ4mybZt1USPmWrz2UJv26J2pps",
  authDomain: "rondo-tur.firebaseapp.com",
  databaseURL: "https://rondo-tur.firebaseio.com",
  projectId: "rondo-tur",
  storageBucket: "rondo-tur.appspot.com",
  messagingSenderId: "880349148178"
};

@NgModule({
  declarations: [
    MyApp,
    ListaAgendaCulturalPage,
    DetalhesAgendaCulturalPage,
    FormAgendaCulturalPage,
    FormPontoTuristicoPage,
    DetalhesPontoTuristicoPage,
    LinhaTempoPage,
    LoginPage,
    ListaPontoTuristicoPage,
    RecuperarSenhaPage,
    CadastroPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp),  
    Ionic2RatingModule,  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListaAgendaCulturalPage,
    DetalhesAgendaCulturalPage,
    FormAgendaCulturalPage,
    FormPontoTuristicoPage,
    DetalhesPontoTuristicoPage,
    LinhaTempoPage,
    LoginPage,
    ListaPontoTuristicoPage,
    RecuperarSenhaPage,
    CadastroPage,
  ],
  providers: [
    ImagePicker,
    StatusBar,
    SplashScreen,
    File,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AgendaCulturalProvider,
    PontoTuristicoProvider,
    UsuarioProvider,
    AuthProvider
  ]
})
export class AppModule {}
