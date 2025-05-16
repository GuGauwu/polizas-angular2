import { Routes } from '@angular/router';
import { ListaPolizasComponent } from './components/lista-polizas/lista-polizas.component';
import { NuevaPolizaComponent } from './components/nueva-poliza/nueva-poliza.component';

export const routes: Routes = [
  { path: '', component: ListaPolizasComponent },
  { path: 'nueva-poliza', component: NuevaPolizaComponent }
];