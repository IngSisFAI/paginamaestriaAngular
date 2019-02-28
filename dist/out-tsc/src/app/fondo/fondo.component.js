import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { config } from '../config';
var fondo = /** @class */ (function () {
    function fondo() {
        this.fotoRuta = config.rutaFotos;
        this.titulo1 = 'Facultad de Informática';
        this.titulo2 = 'UNIVERSIDAD NACIONAL DEL COMAHUE';
        this.logounco = 'logounco.png';
        this.logofai = 'logofaisinfondo.png';
        this.fotounco = 'fotofacu.png';
    }
    fondo = tslib_1.__decorate([
        Component({
            selector: 'fondo-fondo',
            templateUrl: './fondo.component.html',
            styleUrls: ['./fondo.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], fondo);
    return fondo;
}());
export { fondo };
//# sourceMappingURL=fondo.component.js.map