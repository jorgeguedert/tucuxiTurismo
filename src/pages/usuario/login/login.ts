import { ListaAgendaCulturalPage } from '../../agenda-cultural/lista/lista-agenda-cultural';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import {
  Loading,
  LoadingController, 
  AlertController, 
  MenuController} from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EmailValidator } from '../../../validators/email';
import { AuthProvider } from '../../../providers/auth';
import firebase from "firebase";
import { CadastroPage } from '../cadastro/cadastro';
import { RecuperarSenhaPage } from './../recuperar-senha/recuperar-senha';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public loginForm: FormGroup;
  public loading: Loading;
  splash = true;
    
  constructor( public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController, 
    public authProvider: AuthProvider, 
    public formBuilder: FormBuilder,
    public navParams: NavParams,
    public menu: MenuController) 
  {
    
    setTimeout(() => {this.splash = false;
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          navCtrl.setRoot(ListaAgendaCulturalPage);
        }
      });}
      , 4000);
      this.loginForm = formBuilder.group({
        email: ['', 
        Validators.compose([Validators.required, EmailValidator.isValid])],
        password: ['', 
        Validators.compose([Validators.minLength(6), Validators.required])]
      });
      this.menu.enable(false);
  }

  ionViewDidLoad() {
    
  }

  loginUser(): void {
    if (!this.loginForm.valid){
      console.log(this.loginForm.value);
    } else {
      this.authProvider.loginUser(this.loginForm.value.email, 
          this.loginForm.value.password)
      .then( authData => {
        this.loading.dismiss().then( () => {
          this.menu.enable(true);
          this.navCtrl.setRoot(ListaAgendaCulturalPage);
        });
      }, error => {
        this.loading.dismiss().then( () => {
          let alert = this.alertCtrl.create({
            message: error.message,
            buttons: [
              {
                text: "Ok",
                role: 'cancel'
              }
            ]
          });
          alert.present();
        });
      });
      this.loading = this.loadingCtrl.create();
      this.loading.present();
    }
  }
  
  goToSignup(): void { 
    this.navCtrl.push(CadastroPage);
  }
  
  goToResetPassword(): void { 
    this.navCtrl.push(RecuperarSenhaPage); 
  }

}
