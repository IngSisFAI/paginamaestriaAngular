import {Component} from '@angular/core';
import {config} from '../config';
import {MessageService} from '../services/message.service';
import swal from 'sweetalert';


@Component({
  selector: 'titulo-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})

export class titulo {

  public titulo2: string;
  public texto: string;
  public texto2: string
  public texto3: string;
  public texto4: string;
  public texto5: string;
  public texto6: string;
  public fotoRuta: string;
  public logounco: string;
  public logofai: string;
  public fotounco: string;
  public link1: string;
  public link2: string;
  public link3: string;
  public link4: string;

  constructor(public _MessageService: MessageService) {
    this.fotoRuta = config.rutaFotos;
    this.link1 = 'Ordenanza 890/1 CS UNComa';
    this.link2 = 'Resolución N° 1168/97';
    this.link3 = 'Ordenanza CS N° 510/11';
    this.link4  = 'Resolución Ministerial Nº 786/09';
    this.titulo2 = 'Maestría en Ciencias de la Computación';
    this.logounco = 'logounco.png';
    this.logofai = 'logofaisinfondo.png';
    this.fotounco = 'fotofacu.png';

  }

  contactForm(form) {
    this._MessageService.sendMessage(form).subscribe(() => {
    });
    swal({
      title: '¡Enviado!',
      timer: 2000,
      icon: 'success'
    });
    if (form.valid) {
      this.resetear(form);
    }
  }
  resetear(form) {
    form.reset();
  }
}

