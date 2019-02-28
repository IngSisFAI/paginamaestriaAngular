import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var requisitos = /** @class */ (function () {
    function requisitos() {
        this.ins1 = new Requisitos('¿HAY CUPOS?', 'La Maestría se dictará con un cupo mínimo de 15 estudiantes y con un cupo máximo de 30 (sin contar estudiantes docentes en ambos casos).');
        this.ins2 = new Requisitos('¿PUEDO REALIZAR CURSOS DE POSGRADO SIN ESTAR INSCRIPTO?', 'Cualquier persona que cumpla los requisitos de admisión se podrá inscribir a los cursos individuales sin estar inscripto en la carrera. En este caso, el costo a pagar por el curso estará determinado por sus créditos (10 horas equivale a 1 crédito), con un valor de $2.000 por crédito para el año 2019. En este caso se considerará solamente descuentos para el caso de paquetes empresariales (30%).');
        this.ins3 = new Requisitos('¿QUIENES SE PUEDEN INSCRIBIR Y CUÁNDO?', 'La inscripción a la carrera se realiza todos los años durante los meses de Febrero y Julio.');
        this.lista1 = [
            new Requisitos('Profesionales graduados', null),
            new Requisitos(null, 'La inscripción es automática para los profesionales graduados de la disciplina Informática según las carreras reconocidas en la Resolución Ministerial nº 786/09 de la República Argentina (en el caso de la UNComa, Licenciados en Ciencias de la Computación, Licenciados en Sistemas de Información). También se aceptarán graduados en Informática con título equivalente otorgado por universidades extranjeras.'),
            new Requisitos('Planilla de Inscripción', null),
            new Requisitos('Curriculum Vitae del postulante (con antecedentes laborales y de estudio)', null),
            new Requisitos('Fotocopia del DNI', null),
            new Requisitos('Fotocopia del título universitario', null),
            new Requisitos('Certificado Analítico', null),
            new Requisitos('Foto carnet', null),
            new Requisitos('En caso de ser Docente, la constancia correspondiente', null)
        ];
        this.lista2 = [
            new Requisitos('Egresados terciarios ', null),
            new Requisitos(null, 'En el caso de egresados terciarios y/o universitarios con título menor a 4 años de duración o egresados de carreras no afines a Informática, y dilatada experiencia profesional en Informática, se podrá aceptar su inscripción previa evaluación de conocimientos y antecedentes por parte del Director de la Maestría y recomendación explícita del Comité Académico.'),
            new Requisitos('Nota dirigida al Sr. Decano de la Facultad de Informática, solicitando inscripción a la carrera.', null),
            new Requisitos('Planilla de Inscripción', null),
            new Requisitos('Curriculum Vitae del postulante (con antecedentes laborales y de estudio)', null),
            new Requisitos('Fotocopia del DNI', null),
            new Requisitos('Fotocopia del título universitario', null),
            new Requisitos('Certificado analítico de estudios, con las calificaciones obtenidas.', null),
            new Requisitos('Programa de estudios certificado por la Universidad correspondiente, con los contenidos mínimos de las asignaturas', null),
            new Requisitos('Foto carnet', null)
        ];
        this.mostrarInfo = false;
        this.mostrarInfo2 = false;
    }
    requisitos.prototype.cambiarBoolean = function () {
        if (this.mostrarInfo == true) {
            this.mostrarInfo = false;
        }
        else {
            this.mostrarInfo = true;
        }
    };
    requisitos.prototype.cambiarBoolean2 = function () {
        if (this.mostrarInfo2 == true) {
            this.mostrarInfo2 = false;
        }
        else {
            2;
            this.mostrarInfo2 = true;
        }
    };
    requisitos = tslib_1.__decorate([
        Component({
            selector: 'requisitos-requisitos',
            templateUrl: './requisitos.component.html',
            styleUrls: ['./requisitos.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], requisitos);
    return requisitos;
}());
export { requisitos };
//# sourceMappingURL=requisitos.component.js.map
