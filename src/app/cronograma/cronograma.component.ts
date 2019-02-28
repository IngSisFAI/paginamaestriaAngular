import { Component } from '@angular/core';

@Component({
  selector: 'cronograma-cronograma',
  templateUrl: './cronograma.component.html',
  styleUrls: ['./cronograma.component.css']
})

export class crono{
public titulo = 'PLAN DE ESTUDIO:';
public activ1 = 'ACTIVIDADES OBLIGATORIAS MARZO 2019:';
public activ2 = 'ACTIVIDADES OBLIGATORIAS JULIO 2019 (para inscriptos en segundo semestre):';
public txt1 = 'Curso Metodología de la Investigación  (Dra. Gabriela Aranda)\n' +
  '\n' +
  'Examen de suficiencia de Idioma Inglés\n' +
  '\n';
public txt2 = 'Curso Metodología de la Investigación  (Dra. Gabriela Aranda)\n' +
  '\n' +
  '\n' +
  'Examen de suficiencia de Idioma Inglés\n' +
  '\n';
}
