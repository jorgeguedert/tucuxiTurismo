import { Comentario } from './comentario';

import { Avaliacao } from './avaliacao';
export class PontoTuristico{
  $key:string;
    nome: string;
    endereco:string;
    cidade:string;
    uf:string;
    horarioInicio:string;
    horarioFim:string;
    diasSemana:number[];
    valor:string;
    detalhes:string;
    mediaAvaliacao:number;
    avaliacoes:Avaliacao[];
    comentarios:Comentario[];
    fotos:string[];
  }