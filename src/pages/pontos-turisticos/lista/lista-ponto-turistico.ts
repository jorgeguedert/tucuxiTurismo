import { PontoTuristico } from '../../../models/ponto-turistico';
import { PontoTuristicoProvider } from './../../../providers/ponto-turistico';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { DetalhesPontoTuristicoPage } from '../detalhes/detalhes-ponto-turistico';
import { FormPontoTuristicoPage } from '../form/form-ponto-turistico';


@Component({
  selector: 'page-lista-ponto-turistico',
  templateUrl: 'lista-ponto-turistico.html',
})
export class ListaPontoTuristicoPage {
  lista: FirebaseListObservable<PontoTuristico[]>;
  diasSemanaArray = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"]
  
    constructor(public navCtrl: NavController, public navParams: NavParams, private pontoTuristicoProvider:PontoTuristicoProvider) {
      this.lista = this.pontoTuristicoProvider.buscar();
      
    }
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad EventosCulturaisPage');
    }
    
    detalhesPontoTuristico(pontoTuristico):void{
      this.navCtrl.push(DetalhesPontoTuristicoPage, {
        pontoTuristico: pontoTuristico
      });
    } 
  
    adicionarItem():void{
      console.log(this.lista);
      this.navCtrl.push(FormPontoTuristicoPage);
    }
}
