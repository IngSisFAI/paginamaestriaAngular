import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { config } from '../config';
import { MessageService } from '../services/message.service';
import swal from 'sweetalert';
var titulo = /** @class */ (function () {
    function titulo(_MessageService) {
        this._MessageService = _MessageService;
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
    titulo.prototype.contactForm = function (form) {
        this._MessageService.sendMessage(form).subscribe(function () {
        });
        swal({
            title: '¡Enviado!',
            timer: 2000,
            icon: 'success'
        });
        if (form.valid) {
            this.resetear(form);
        }
    };
    titulo.prototype.resetear = function (form) {
        form.reset();
    };
    titulo = tslib_1.__decorate([
        Component({
            selector: 'titulo-titulo',
            templateUrl: './titulo.component.html',
            styleUrls: ['./titulo.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [MessageService])
    ], titulo);
    return titulo;
}());
export { titulo };
//# sourceMappingURL=titulo.component.js.map