import { ListaAgendaCulturalPage } from '../../agenda-cultural/lista/lista-agenda-cultural';
import { Component } from '@angular/core';
import {
  NavController,
  Loading,
  LoadingController,
  AlertController
} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthProvider } from '../../../providers/auth';
import { EmailValidator } from '../../../validators/email';
import { PasswordValidation } from '../../../validators/password';

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  public signupForm: FormGroup;
  public loading: Loading;
  constructor(
    public navCtrl: NavController,
    public authProvider: AuthProvider,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController
  ) {
    this.signupForm = formBuilder.group({
      nome: ['',
        Validators.compose([Validators.minLength(4), Validators.required])],
      email: ['',
        Validators.compose([Validators.required, EmailValidator.isValid])],
      senha: ['',
        Validators.compose([Validators.minLength(6), Validators.required])],
      confirmSenha: ['',
        Validators.compose([Validators.minLength(6), Validators.required])]
    },
      {
        validator: PasswordValidation.MatchPassword
      });
  }

  signupUser() {
    if (!this.signupForm.valid) {
      console.log(this.signupForm.value);
    } else {
      debugger;
      this.authProvider.signupUser(this.signupForm.value)
        .then(() => {
          this.loading.dismiss().then(() => {
            this.navCtrl.setRoot(ListaAgendaCulturalPage);
          });
        }, (error) => {
          this.loading.dismiss().then(() => {
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
}