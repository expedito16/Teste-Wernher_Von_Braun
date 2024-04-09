import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { DevicesListComponent } from './devices-list/devices-list.component';

const routes: Routes = [
  { path:'lista-dispositivos', component: DevicesListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevicesRoutingModule { }
