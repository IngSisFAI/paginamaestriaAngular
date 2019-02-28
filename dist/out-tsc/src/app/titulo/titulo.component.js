import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Persona } from './person';
import { config } from '../config';
var titulo = /** @class */ (function () {
    function titulo() {
        this.model = new Persona(0, null, null, null, null);
        this.submitted = false;
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
    titulo.prototype.onSubmit = function () {
        this.submitted = true;
    };
    titulo.prototype.guardar = function () {
        console.log(this.model);
        alert("El mensaje se envio");
    };
    titulo = tslib_1.__decorate([
        Component({
            selector: 'titulo-titulo',
            templateUrl: './titulo.component.html',
            styleUrls: ['./titulo.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], titulo);
    return titulo;
}());
export { titulo };
//# sourceMappingURL=titulo.component.js.map