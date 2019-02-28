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
  public fotoRuta: string;
  public logounco: string;
  public logofai: string;
  public fotounco: string;

  constructor(public _MessageService: MessageService) {
    this.fotoRuta = config.rutaFotos;

    this.titulo2 = 'Maestría en Ciencias de la Computación';
    this.texto =
      'El carácter de la Maestría en Ciencias de la Computación es amplio y no está limitado\n' +
      'al marco de un área de la Informática en particular. Tendrá como orientaciones iniciales aquellas ' +
      'que derivan de las áreas específicas de la disciplina Informática según la Resolución Ministerial nº 786/09: Teoría de la' +
      ' Computación; Arquitectura, Sistemas Operativos y Redes; Ingeniería de Software, Bases de Datos y Sistemas de Información; y ' +
      'Algoritmos y Lenguajes.';
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

