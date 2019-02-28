import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {requisitos} from './requisitos/requisitos.component';
import {infoG} from './infoGeneral/informacionGeneral.component';
import {crono} from './cronograma/cronograma.component';
import {formu2} from './formularionuevo/formu.component';

const appRoutes: Routes = [
  {path: 'requisitos', component: requisitos},
  {path: 'infogeneral', component: infoG},
  {path: 'cronograma', component: crono},
  {path: 'form', component: formu2},
];

export const appRoutingProviders: any [] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
