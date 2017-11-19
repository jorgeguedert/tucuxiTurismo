import { Usuario } from './../models/usuario';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

@Injectable()
export class UsuarioProvider {
  listItems: FirebaseListObservable<Usuario[]>;
  constructor(public http: Http, public af: AngularFireDatabase) {
    this.listItems = this.af.list('/usuarios');
  }

  buscar() {
   return this.listItems;
  }
}
