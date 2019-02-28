import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Inscripcion } from './inscripcion';
var inscripcion = /** @class */ (function () {
    function inscripcion() {
        this.ins1 = new Inscripcion('¿HAY CUPOS?', 'La Maestría se dictará con un cupo mínimo de 15 estudiantes y con un cupo máximo de 30 (sin contar estudiantes docentes en ambos casos).');
        this.ins2 = new Inscripcion('¿PUEDO REALIZAR CURSOS DE POSGRADO SIN ESTAR INSCRIPTO?', 'Cualquier persona que cumpla los requisitos de admisión, se podrá inscribir a los cursos individuales sin estar inscripto en la carrera. En este caso, el costo a pagar por el curso estará determinado por sus créditos (10 horas equivale a 1 crédito), con un valor de $2.000 por crédito para el año 2019. En este caso se considerará solamente descuentos para el caso de paquetes empresariales (30%).');
        this.ins3 = new Inscripcion('¿QUIENES SE PUEDEN INSCRIBIR Y CUÁNDO?', 'La inscripción a la carrera se realiza todos los años durante los meses de Febrero y Julio.');
        this.lista1 = [
            new Inscripcion('Profesionales graduados', null),
            new Inscripcion(null, 'La inscripción es automática para los profesionales graduados de la disciplina Informática según las carreras reconocidas en la Resolución Ministerial nº 786/09 de la República Argentina (en el caso de la UNComa, Licenciados en Ciencias de la Computación, Licenciados en Sistemas de Información). También se aceptarán graduados en Informática con título equivalente otorgado por Universidades extranjeras.'),
            new Inscripcion('Planilla de Inscripción', null),
            new Inscripcion('Curriculum Vitae del postulante (con antecedentes laborales y de estudio)', null),
            new Inscripcion('Fotocopia del DNI', null),
            new Inscripcion('Fotocopia del título universitario', null),
            new Inscripcion('Certificado Analítico', null),
            new Inscripcion('Foto carnet', null),
            new Inscripcion('En caso de ser Docente, la constancia correspondiente', null)
        ];
        this.lista2 = [
            new Inscripcion('Egresados terciarios ', null),
            new Inscripcion(null, 'En el caso de egresados terciarios y/o universitarios con título menor a 4 años de duración o egresados de carreras no afines a Informática, y dilatada experiencia profesional en Informática, se podrá aceptar su inscripción previa evaluación de conocimientos y antecedentes por parte del Director de la Maestría y recomendación explícita del Comité Académico.'),
            new Inscripcion('Nota dirigida al Sr. Decano de la Facultad de Informática, solicitando inscripción a la carrera.', null),
            new Inscripcion('Planilla de Inscripción', null),
            new Inscripcion('Curriculum Vitae del postulante (con antecedentes laborales y de estudio)', null),
            new Inscripcion('Fotocopia del DNI', null),
            new Inscripcion('Fotocopia del título universitario', null),
            new Inscripcion('Certificado analítico de estudios, con las calificaciones obtenidas.', null),
            new Inscripcion('Programa de estudios certificado por la Universidad correspondiente, con los contenidos mínimos de las asignaturas', null),
            new Inscripcion('Foto carnet', null)
        ];
        this.mostrarInfo = false;
        this.mostrarInfo2 = false;
    }
    inscripcion.prototype.cambiarBoolean = function () {
        if (this.mostrarInfo == true) {
            this.mostrarInfo = false;
        }
        else {
            this.mostrarInfo = true;
        }
    };
    inscripcion.prototype.cambiarBoolean2 = function () {
        if (this.mostrarInfo2 == true) {
            this.mostrarInfo2 = false;
        }
        else {
            2;
            this.mostrarInfo2 = true;
        }
    };
    inscripcion = tslib_1.__decorate([
        Component({
            selector: 'inscripcion-inscripcion',
            templateUrl: './inscripcion.component.html',
            styleUrls: ['./inscripcion.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], inscripcion);
    return inscripcion;
}());
export { inscripcion };
//# sourceMappingURL=inscripcion.component.js.map