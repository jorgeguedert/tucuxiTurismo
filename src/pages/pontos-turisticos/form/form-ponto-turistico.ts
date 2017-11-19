import { ImagePicker } from '@ionic-native/image-picker';
import { PontoTuristicoProvider } from '../../../providers/ponto-turistico';
import { PontoTuristico } from './../../../models/ponto-turistico';
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { File } from '@ionic-native/file';

/**
 * Generated class for the CadastrarPontoTuristicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-form-ponto-turistico',
  templateUrl: 'form-ponto-turistico.html',
})
export class FormPontoTuristicoPage {  
  @ViewChild('slider') slider: Slides;
  pontoTuristico: PontoTuristico;
  tabValue:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private pontoTuristicoProvider:PontoTuristicoProvider, private imagePicker: ImagePicker, private file:File) {
    this.pontoTuristico = new PontoTuristico();
  }

  ionViewDidLoad() {
    //this.slider.autoHeight=true;
    this.tabValue = 'detalhes';
    console.log('ionViewDidLoad EventosCulturaisPage');
  }
  cadastrar(){
    this.pontoTuristicoProvider.salvar(this.pontoTuristico);
    this.navCtrl.pop({animate:true});
  }

  slideChanged(){
    this.slider.resize();
  }

  selectImages(){
    this.imagePicker.getPictures({maximumImagesCount:10}).then((results) => {
      for (var i = 0; i < results.length; i++) {
        this.file.readAsDataURL(this.file.cacheDirectory, results[0].replace(/^.*[\\\/]/, '')).then((data)=>{
          console.log(data);
        });
          console.log('Image URI: ' + results[i]);
      }
    }, (err) => { });
  }

}
