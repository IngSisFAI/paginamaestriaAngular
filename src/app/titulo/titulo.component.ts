import {Component} from '@angular/core';
import {config} from '../config';
import {MessageService} from '../services/message.service';
import swal from 'sweetalert';
import * as $ from 'jquery';

@Component({
  selector: 'titulo-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})

export class titulo {

  public titulo2: string;
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
    this.logofai = 'favicon.png';
    this.fotounco = 'fotofacu.png';

  }


  scrollTOElement = (element, offsetParam?, speedParam?) => {
    const toElement = $(element);
    const focusElement = $(element);
    const offset = offsetParam * 1 || 200;
    const speed = speedParam * 1 || 500;
    $('html, body').animate({
      scrollTop: toElement.offset().top + offset
    }, speed);
    if (focusElement) {
      $(focusElement).focus();
    }
  }


  /* mensaje de enviado con exito el formulario */
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
  /* intento de reset de formulario pero no resulto */
  resetear(form) {
    form.reset();
  }

}

