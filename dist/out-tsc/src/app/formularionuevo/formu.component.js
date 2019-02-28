import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { config } from '../config';
import { Persona } from './person';
var formu2 = /** @class */ (function () {
    function formu2() {
        this.model = new Persona(0, null, null, null, null, null);
        this.submitted = false;
        this.logounco = 'logounco.png';
        this.fotoRuta = config.rutaFotos;
    }
    formu2.prototype.onSubmit = function () { this.submitted = true; };
    formu2.prototype.newPersona = function () {
        this.model = new Persona(1, null, null, null, null, null);
    };
    formu2.prototype.resolved = function (captchaResponse) {
        console.log("Resolved captcha with response " + captchaResponse + ":");
    };
    formu2.prototype.guardar = function () {
        console.log(this.model);
        alert('El mensaje se envio');
    };
    formu2 = tslib_1.__decorate([
        Component({
            selector: 'formu-formu',
            templateUrl: './formu.component.html',
            styleUrls: ['./formu.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], formu2);
    return formu2;
}());
export { formu2 };
//# sourceMappingURL=formu.component.js.map