import { PontoTuristicoProvider } from './../../../providers/ponto-turistico';
import { UsuarioProvider } from '../../../providers/usuario';
import { Usuario } from '../../../models/usuario';
import { PontoTuristico } from './../../../models/ponto-turistico';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { AlertController, LoadingController, NavController, NavParams, Slides } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import firebase from "firebase";

/**
 * Generated class for the DetalhesPontoTuristicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;
@Component({
  selector: 'page-detalhes-ponto-turistico',
  templateUrl: 'detalhes-ponto-turistico.html',
})
export class DetalhesPontoTuristicoPage {
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('slider') slider: Slides;
  map: any;
  travelMode = 'DRIVING';
  static directionsService = new google.maps.DirectionsService();
  static directionsDisplay = new google.maps.DirectionsRenderer();
  pontoTuristico: PontoTuristico;
  avaliacaoUsuario: number;
  comentarioUsuario: string;
  tabValue:string;
  diasSemanaArray = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"]

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private geolocation: Geolocation,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private pontoTuristicoProvider: PontoTuristicoProvider,
    private usuarioProvider: UsuarioProvider) {

    this.pontoTuristico = navParams.get('pontoTuristico');
    if (!this.pontoTuristico.avaliacoes) {
      this.pontoTuristico.mediaAvaliacao = 0;
    }
    else {
      this.atualizarMedia();
      var avaliacao = this.pontoTuristico.avaliacoes.find((value) => {
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
    DetalhesPontoTuristicoPage.directionsDisplay.setMap(this.map);
      DetalhesPontoTuristicoPage.directionsService.route({
        origin:  `-8.750056,-63.910114`,
        destination: `-8.752021,-63.909166`,
        travelMode: this.travelMode
      }, function (response, status) {
        if (status === 'OK') {
          DetalhesPontoTuristicoPage.directionsDisplay.setDirections(response);
        }
        loading.dismiss();
      });
  }

  confirmRating() {
    let alert = this.alertController.create({
      title: 'Confirma avaliação?',
      message: 'Deseja confirmar a avaliação para este Ponto Turístico?',
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
            if (this.pontoTuristico.avaliacoes) {
              var avaliacao = this.pontoTuristico.avaliacoes.find((value) => {
                return value.usuarioEmail == firebase.auth().currentUser.email;
              });
              if (avaliacao) {
                this.pontoTuristico.avaliacoes[this.pontoTuristico.avaliacoes.indexOf(avaliacao)].nota = this.avaliacaoUsuario;
                this.pontoTuristico.avaliacoes[this.pontoTuristico.avaliacoes.indexOf(avaliacao)].usuarioEmail = firebase.auth().currentUser.email;
              } else {
                this.pontoTuristico.avaliacoes.push({ nota: this.avaliacaoUsuario, usuarioEmail: firebase.auth().currentUser.email });
              }
            }
            else {
              this.pontoTuristico.avaliacoes = [];
              this.pontoTuristico.avaliacoes.push({ nota: this.avaliacaoUsuario, usuarioEmail: firebase.auth().currentUser.email });
            }
            this.pontoTuristicoProvider.salvar(this.pontoTuristico);
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
      if (!this.pontoTuristico.comentarios)
        this.pontoTuristico.comentarios = [];
      this.pontoTuristico.comentarios.push({
        usuarioNome: usuario.nome,
        usuarioEmail: usuario.email,
        mensagem: this.comentarioUsuario,
        data: new Date(),
      });
      this.pontoTuristico.comentarios = this.pontoTuristico.comentarios.sort((a, b) => {
        if (a.data < b.data)
          return 1;
        if (a.data > b.data)
          return -1;
        return 0;
      });
      this.pontoTuristicoProvider.salvar(this.pontoTuristico);
      this.comentarioUsuario = '';
    });

  }

  atualizarMedia() {
    let valores = this.pontoTuristico.avaliacoes.map((value, index) => {
      return value.nota;
    });
    let soma = valores.reduce((prev, curr, indexPrev, indexCurr) => {
      return curr += prev;
    });
    if (this.pontoTuristico.avaliacoes.length > 0) {
      this.pontoTuristico.mediaAvaliacao = soma / this.pontoTuristico.avaliacoes.length;
    }
    else {
      this.pontoTuristico.mediaAvaliacao = 0;
    }
  }

  slideChanged(){
    this.slider.resize();
  }
}
