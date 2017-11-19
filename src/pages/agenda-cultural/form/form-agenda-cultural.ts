import { File } from '@ionic-native/file';
import { ImagePicker } from '@ionic-native/image-picker';
import { AgendaCulturalProvider } from './../../../providers/agenda-cultural';

import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { AgendaCultural } from '../../../models/agenda-cultural';

@Component({
  selector: 'form-form-agenda-cultural',
  templateUrl: 'form-agenda-cultural.html',
})
export class FormAgendaCulturalPage {
  @ViewChild('slider') slider: Slides;
  agendaCultural: AgendaCultural;
  tabValue:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private agendaCulturalProvider:AgendaCulturalProvider, private imagePicker: ImagePicker, private file:File) {
    this.agendaCultural = new AgendaCultural();
  }

  ionViewDidLoad() {
    //this.slider.autoHeight=true;
    this.tabValue = 'detalhes';
    console.log('ionViewDidLoad EventosCulturaisPage');
  }
  cadastrar(){
    this.agendaCulturalProvider.salvar(this.agendaCultural);
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
