import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { config } from '../config';
import { Persona } from './person';
import { MessageService } from '../services/message.service';
import swal from 'sweetalert';
var formu2 = /** @class */ (function () {
    function formu2(_MessageService) {
        this._MessageService = _MessageService;
        this.model = new Persona(0, null, null, null, null, null);
        this.submitted = false;
        this.logounco = 'logounco.png';
        this.fotoRuta = config.rutaFotos;
    }
    formu2.prototype.resolved = function (captchaResponse) {
        alert("Resolved captcha with response " + captchaResponse + ":");
    };
    formu2.prototype.contactForm = function (form) {
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
    formu2.prototype.resetear = function (form) {
        form.reset();
    };
    formu2 = tslib_1.__decorate([
        Component({
            selector: 'formu-formu',
            templateUrl: './formu.component.html',
            styleUrls: ['./formu.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [MessageService])
    ], formu2);
    return formu2;
}());
export { formu2 };
//# sourceMappingURL=formu.component.js.map