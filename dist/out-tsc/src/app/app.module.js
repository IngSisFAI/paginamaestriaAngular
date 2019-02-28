import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { routing, appRoutingProviders } from './app-routing.module';
import { AppComponent } from './app.component';
import { fondo } from './fondo/fondo.component';
import { infoG } from './infoGeneral/informacionGeneral.component';
import { inscripcion } from './inscripcion/inscripcion.component';
import { crono } from './cronograma/cronograma.component';
import { formu } from './formulario/formulario.component';
import { pie } from './piepagina/piepagina.component';
import { titulo } from './titulo/titulo.component';
import { formu2 } from './formularionuevo/formu.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { MessageService } from './services/message.service';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                fondo, infoG, inscripcion, crono, formu, pie, formu2, titulo
            ],
            imports: [
                BrowserModule,
                routing,
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule,
                RecaptchaModule.forRoot()
            ],
            providers: [appRoutingProviders, MessageService],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map