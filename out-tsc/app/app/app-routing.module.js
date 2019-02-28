import { RouterModule } from '@angular/router';
import { requisitos } from './requisitos/requisitos.component';
import { infoG } from './infoGeneral/informacionGeneral.component';
import { crono } from './cronograma/cronograma.component';
import { formu2 } from './formularionuevo/formu.component';
var appRoutes = [
    { path: 'requisitos', component: requisitos },
    { path: 'infogeneral', component: infoG },
    { path: 'cronograma', component: crono },
    { path: 'form', component: formu2 },
];
export var appRoutingProviders = [];
export var routing = RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app-routing.module.js.map