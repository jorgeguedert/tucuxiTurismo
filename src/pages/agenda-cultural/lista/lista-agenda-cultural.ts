import { AgendaCultural } from './../../../models/agenda-cultural';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { FormAgendaCulturalPage } from './../form/form-agenda-cultural';
import { AgendaCulturalProvider } from './../../../providers/agenda-cultural';
import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { DetalhesAgendaCulturalPage } from '../detalhes/detalhes-agenda-cultural';


@Component({
  selector: 'page-lista-agenda-cultural',
  templateUrl: 'lista-agenda-cultural.html',
})
export class ListaAgendaCulturalPage {
  lista: FirebaseListObservable<AgendaCultural[]>;
 

  constructor(public navCtrl: NavController, public navParams: NavParams, private menu:MenuController, private agendaCulturalProvider:AgendaCulturalProvider) {
    this.menu.enable(true);
    this.lista = this.agendaCulturalProvider.buscar();
    
  }

  ionViewDidLoad() {
    
  }
  
  detalhesAgendaCultural(agendaCultural):void{
    this.navCtrl.push(DetalhesAgendaCulturalPage, {
      agendaCultural: agendaCultural
    });
  } 

  adicionarItem():void{
    console.log(this.lista);
    this.navCtrl.push(FormAgendaCulturalPage);
  }

}
