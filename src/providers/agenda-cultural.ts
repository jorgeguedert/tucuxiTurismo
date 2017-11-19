import { AgendaCultural } from './../models/agenda-cultural';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

@Injectable()
export class AgendaCulturalProvider {
  listItems: FirebaseListObservable<AgendaCultural[]>;
  constructor(public http: Http, public af: AngularFireDatabase) {
    this.listItems = this.af.list('/AgendaCultural',{
      query:{
        orderByChild:'dataInicio',
      }
    });
    console.log('Hello PontoTuristicoProvider Provider');
  }

  buscar() {
    return this.listItems;
  }

  salvar(item: AgendaCultural) {
    if (item.$key)
      this.listItems.update(item.$key, item);
    else
      this.listItems.push(item);
  }

  buscarPorId() {
    //TODO
    //return this.listItems
  }

}
