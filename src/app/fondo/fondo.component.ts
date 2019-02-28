import {Component} from '@angular/core';
import {config} from '../config';

@Component({
  selector: 'fondo-fondo',
  templateUrl: './fondo.component.html',
  styleUrls: ['./fondo.component.css']
})

export class fondo {
  public titulo1: string;
  public titulo2: string
  public fotoRuta: string;
  public logounco: string;
  public logofai: string;
  public fotounco: string;

  constructor() {
    this.fotoRuta = config.rutaFotos;
    this.titulo1 = 'Facultad de Informática';
    this.titulo2 = 'UNIVERSIDAD NACIONAL DEL COMAHUE'
    this.logounco = 'logounco.png';
    this.logofai = 'logofaisinfondo.png';
    this.fotounco = 'fotofacu.png';

  }

}

