import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { PontoTuristico } from '../models/ponto-turistico';

@Injectable()
export class PontoTuristicoProvider {
  listItems: FirebaseListObservable<PontoTuristico[]>;
  constructor(public http: Http, public af: AngularFireDatabase) {
    this.listItems = this.af.list('/PontoTuristico', {
      query: {
        orderByChild: 'dataInicio',
      }
    });
    console.log('Hello PontoTuristicoProvider Provider');
  }

  buscar() {
    return this.listItems;
  }

  salvar(item: PontoTuristico) {
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

