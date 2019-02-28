import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var MessageService = /** @class */ (function () {
    function MessageService(_http) {
        this._http = _http;
    }
    MessageService.prototype.sendMessage = function (body) {
        return this._http.post('http://localhost:3000/titulo/formulario', body);
        return this._http.post('http://localhost:3000/formularionuevo/formulario', body);
        return this._http.post('http://localhost:3000/subscribe', body);
    };
    MessageService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], MessageService);
    return MessageService;
}());
export { MessageService };
//# sourceMappingURL=message.service.js.map