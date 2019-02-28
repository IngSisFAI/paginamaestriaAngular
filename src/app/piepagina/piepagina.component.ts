import { Component } from '@angular/core';


@Component({
  selector: 'piepagina-piepagina',
  templateUrl: './piepagina.component.html',
  styleUrls: ['./piepagina.component.css']
})

export class pie {
  public descripcion: string;
  public descripcion2: string;
  public ubicacion: string;
  public telefono = '+54-299-4490300 Interno: 644 ';

  constructor() {
    this.descripcion = 'UNCO';
    this.descripcion2 = 'FAI WEB';
    this.ubicacion = 'Buenos Aires 1400 (8300) Neuquén Capital ';
  }
}
