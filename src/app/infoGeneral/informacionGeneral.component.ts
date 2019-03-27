import {Component, HostListener} from '@angular/core';


@Component({
  selector: 'infoGeneral-infoGeneral',
  templateUrl: './informacionGeneral.component.html',
  styleUrls: ['./informacionGeneral.component.css']
})

export class infoG {

  public subtitulo1: string;
  public texto2: string;
  public subtitulo2: string;
  public texto3: string;
  public subtitulo3: string
  public texto4: string;
  public subtitulo4: string;
  public texto5: string;
  public subtitulo5: string;
  public texto6: string;
  public subtitulo6: string;
  public texto7: string;
  public subtitulo7: string;
  public texto8: string;
  public link1: string;
  public link2: string;
  public link3: string;
  constructor(){
    this.link1 = 'Ordenanza CS N° 510/11';
    this.link2 = 'Resolución N° 1168/97';
    this.link3  = 'Resolución Ministerial Nº 786/09';
    this.subtitulo1 = 'Información';
    this.texto2 = 'La carrera de Maestría en Ciencias de la Computación conduce al otorgamiento del\n' +
      'título de Magíster en Ciencias de la Computación. ';
    this.subtitulo2 = '¿QUÉ OBJETIVOS TIENE?';
    this.texto3 = 'El objetivo de la carrera de Maestría en Ciencias de la Computación es realizar\n' +
      'estudios de un área específica de la disciplina informática, de modo de alcanzar un conocimiento actualizado y profundo de la misma. Estos estudios, mediante programas personalizados, se completarán con el desarrollo de una Tesis que tenga aportes concretos de Investigación y/o Desarrollo para la disciplina en el país, demostrando destreza en el manejo conceptual y metodológico inherente al mismo.';
      this.subtitulo3 = '¿A QUÉ SE ORIENTA?';
    this.subtitulo4 = '¿CÓMO SE ORGANIZA?';
    this.subtitulo5 = '¿CUÁNTO DURA?';
    this.texto6 = 'El plazo estipulado para la realización de las actividades tendientes a obtener el\n' +
      'Grado Académico de Magíster no podrá ser menor a dos (2) años ni mayor a cinco (5) años, a\n' +
      'partir de la fecha de inscripción.\n' +
      'Cada estudiante deberá cursar las materias especificadas en su Plan de Formación en\n' +
      'un lapso máximo de tres semestres, a partir de su ingreso a la Maestría en Ciencias de la\n' +
      'Computación.';
    this.subtitulo6 = '¿PUEDO REALIZAR CURSOS DE POSGRADO SIN ESTAR INSCRIPTO?';
    this.texto7 = 'Cualquier persona que cumpla los requisitos de admisión se podrá inscribir a los cursos\n' +
        'individuales sin estar inscripto en la carrera. Para esto se debe completar el formulario de \n' +
        'Solicitar Informacion" especificando la intencion de inscribirse an alguno de los cursos detallado en el plan de estudios.';
    this.subtitulo7 = '¿Qué título expide?';
  }

}
