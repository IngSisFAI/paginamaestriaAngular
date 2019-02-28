import { Component } from '@angular/core';
import {config} from '../config';
import {Persona} from './person';
import {MessageService} from '../services/message.service';
import swal from 'sweetalert';


@Component({
  selector: 'formu-formu',
  templateUrl: './formu.component.html',
  styleUrls: ['./formu.component.css']
})
export class formu2 {
  public fotoRuta: string;
  public logounco: string;
  public persona: Persona;
  public model = new Persona(0, null, null, null, null, null);
  public submitted = false;

  constructor(public _MessageService: MessageService) {
    this.logounco = 'logounco.png';
    this.fotoRuta = config.rutaFotos;
  }

  public resolved(captchaResponse: string) {
    alert(`Resolved captcha with response ${captchaResponse}:`);
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
