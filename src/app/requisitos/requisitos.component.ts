import { Component } from '@angular/core';
import {Requisitos} from './Requisitos';

@Component({
  selector: 'requisitos-requisitos',
  templateUrl: './requisitos.component.html',
  styleUrls: ['./requisitos.component.css']
})
export class requisitos {
  public ins1: Requisitos;
  public ins2: Requisitos;
  public ins3: Requisitos;
  public lista1: Array<Requisitos>;
  public lista2: Array<Requisitos>;
  public mostrarInfo: boolean;
  public mostrarInfo2: boolean;

  constructor() {
    this.ins3 = new Requisitos('¿QUIENES SE PUEDEN INSCRIBIR Y CUÁNDO?', 'La inscripción a la carrera se realiza todos los años durante los meses de Febrero y Julio.');
    this.lista1 = [
        new Requisitos('Profesionales graduados', null),
        new Requisitos(null, 'La inscripción es automática para los profesionales graduados de la disciplina Informática según las carreras reconocidas en la Resolución Ministerial nº 786/09 de la República Argentina (en el caso de la UNComa, Licenciados en Ciencias de la Computación, Licenciados en Sistemas de Información). También se aceptarán graduados en Informática con título equivalente otorgado por universidades extranjeras.'),
        new Requisitos('Planilla de Inscripción',null),
        new Requisitos('Curriculum Vitae del postulante (con antecedentes laborales y de estudio)', null),
        new Requisitos('Fotocopia del DNI',null),
        new Requisitos('Fotocopia del título universitario',null),
        new Requisitos('Certificado Analítico de estudios, con las calificaciones obtenidas.', null),
        new Requisitos('2 Fotos carnet', null),
        new Requisitos('En caso de ser Docente, la constancia correspondiente', null)
    ];

    this.lista2 = [
        new Requisitos('Egresados terciarios ', null),
        new Requisitos(null, 'En el caso de egresados terciarios y/o universitarios con título menor a 4 años de duración o egresados de carreras no afines a Informática, y dilatada experiencia profesional en Informática, se podrá aceptar su inscripción previa evaluación de conocimientos y antecedentes por parte del Director de la Maestría y recomendación explícita del Comité Académico.'),
        new Requisitos('Nota dirigida al Sr. Decano de la Facultad de Informática, solicitando inscripción a la carrera.', null),
        new Requisitos('Planilla de Inscripción', null),
        new Requisitos('Curriculum Vitae del postulante (con antecedentes laborales y de estudio)', null),
        new Requisitos('Fotocopia del DNI', null),
        new Requisitos('Fotocopia del título que posean', null),
        new Requisitos('Certificado analítico de estudios, con las calificaciones obtenidas.', null),
        new Requisitos('Programa de estudios certificado por la Universidad correspondiente, con los contenidos mínimos de las asignaturas', null),
        new Requisitos('2 Fotos carnet', null)
    ];

    this.mostrarInfo = false;
    this.mostrarInfo2 = false;

  }
  /* botones que muestran informacion si se les hace clic */
  cambiarBoolean() {
    if (this.mostrarInfo == true) {
      this.mostrarInfo = false;
    } else {
      this.mostrarInfo = true;
    }
  }
  cambiarBoolean2() {
    if (this.mostrarInfo2 == true) {
      this.mostrarInfo2 = false;
    } else {
      this.mostrarInfo2 = true;
    }
  }
}





