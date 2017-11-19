import { Usuario } from './../../../models/usuario';
import { UsuarioProvider } from './../../../providers/usuario';
import { AgendaCulturalProvider } from './../../../providers/agenda-cultural';
import { AgendaCultural } from './../../../models/agenda-cultural';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController, Slides } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import firebase from "firebase";

/**
 * Generated class for the DetalhesAgendaCulturalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;
@Component({
  selector: 'page-detalhes-agenda-cultural',
  templateUrl: 'detalhes-agenda-cultural.html',
})
export class DetalhesAgendaCulturalPage {
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('slider') slider: Slides;
  map: any;
  travelMode = 'DRIVING';
  static directionsService = new google.maps.DirectionsService();
  static directionsDisplay = new google.maps.DirectionsRenderer();
  agendaCultural: AgendaCultural;
  avaliacaoUsuario: number;
  comentarioUsuario: string;
  tabValue: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private geolocation: Geolocation,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private agendaCulturalProvider: AgendaCulturalProvider,
    private usuarioProvider: UsuarioProvider) {

    this.agendaCultural = navParams.get('agendaCultural');
    if (!this.agendaCultural.avaliacoes) {
      this.agendaCultural.mediaAvaliacao = 0;
    }
    else {
      this.atualizarMedia();
      var avaliacao = this.agendaCultural.avaliacoes.find((value) => {
        return value.usuarioEmail == firebase.auth().currentUser.email;
      });
      if (avaliacao)
        this.avaliacaoUsuario = avaliacao.nota;
    }
    this.tabValue = 'detalhes';
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    let latLng = new google.maps.LatLng(-34.9290, 138.6010);
    const loading = this.loadingController.create({
      content: 'Aguarde...'
    });
    loading.present();
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    DetalhesAgendaCulturalPage.directionsDisplay.setMap(this.map);
    DetalhesAgendaCulturalPage.directionsService.route({
      origin: `-8.750056,-63.910114`,
      destination: `-8.752021,-63.909166`,
      travelMode: this.travelMode
    }, function (response, status) {
      if (status === 'OK') {
        DetalhesAgendaCulturalPage.directionsDisplay.setDirections(response);
      }
      loading.dismiss();
    });
  }

  confirmRating() {
    let alert = this.alertController.create({
      title: 'Confirma avaliação?',
      message: 'Deseja confirmar a avaliação para esta Agenda Cultural?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Confirmar',
          handler: () => {
            if (this.agendaCultural.avaliacoes) {
              var avaliacao = this.agendaCultural.avaliacoes.find((value) => {
                return value.usuarioEmail == firebase.auth().currentUser.email;
              });
              if (avaliacao) {
                this.agendaCultural.avaliacoes[this.agendaCultural.avaliacoes.indexOf(avaliacao)].nota = this.avaliacaoUsuario;
                this.agendaCultural.avaliacoes[this.agendaCultural.avaliacoes.indexOf(avaliacao)].usuarioEmail = firebase.auth().currentUser.email;
              } else {
                this.agendaCultural.avaliacoes.push({ nota: this.avaliacaoUsuario, usuarioEmail: firebase.auth().currentUser.email });
              }
            }
            else {
              this.agendaCultural.avaliacoes = [];
              this.agendaCultural.avaliacoes.push({ nota: this.avaliacaoUsuario, usuarioEmail: firebase.auth().currentUser.email });
            }
            this.agendaCulturalProvider.salvar(this.agendaCultural);
            this.atualizarMedia();
          }
        }
      ]
    });

    alert.present();
  }

  sendComment() {
    let usuario: Usuario;
    let email = firebase.auth().currentUser.email;
    this.usuarioProvider.buscar().subscribe((items) => {
      usuario = items.find((value, index) => {
        return value.email == email;
      });
      if (!this.agendaCultural.comentarios)
        this.agendaCultural.comentarios = [];
      this.agendaCultural.comentarios.push({
        usuarioNome: usuario.nome,
        usuarioEmail: usuario.email,
        mensagem: this.comentarioUsuario,
        data: new Date(),
      });
      this.agendaCultural.comentarios = this.agendaCultural.comentarios.sort((a, b) => {
        if (a.data < b.data)
          return 1;
        if (a.data > b.data)
          return -1;
        return 0;
      });
      this.agendaCulturalProvider.salvar(this.agendaCultural);
      this.comentarioUsuario = '';
    });

  }

  atualizarMedia() {
    let valores = this.agendaCultural.avaliacoes.map((value, index) => {
      return value.nota;
    });
    let soma = valores.reduce((prev, curr, indexPrev, indexCurr) => {
      return curr += prev;
    });
    if (this.agendaCultural.avaliacoes.length > 0) {
      this.agendaCultural.mediaAvaliacao = soma / this.agendaCultural.avaliacoes.length;
    }
    else {
      this.agendaCultural.mediaAvaliacao = 0;
    }
  }

  slideChanged() {
    this.slider.resize();
  }

}
