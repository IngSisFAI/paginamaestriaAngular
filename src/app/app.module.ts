import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {routing, appRoutingProviders} from './app-routing.module';
import {AppComponent} from './app.component';
import {fondo} from './fondo/fondo.component';
import {infoG} from './infoGeneral/informacionGeneral.component';
import {requisitos} from './requisitos/requisitos.component';
import {crono} from './cronograma/cronograma.component';
import {pie} from './piepagina/piepagina.component';
import {titulo} from './titulo/titulo.component';
import {formu2} from './formularionuevo/formu.component';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { MessageService } from './services/message.service';


@NgModule({
  declarations: [
    AppComponent,
    fondo, infoG, requisitos, crono, pie, formu2, titulo
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecaptchaModule
  ],
  providers: [appRoutingProviders, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
