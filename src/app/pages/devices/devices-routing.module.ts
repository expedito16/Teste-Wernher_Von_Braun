import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { DevicesListComponent } from './devices-list/devices-list.component';
import { CreateDeviceComponent } from './create-device/create-device.component';

const routes: Routes = [
  { path:'lista-dispositivos', component: DevicesListComponent },
  { path:'criar-dispositivo', component: CreateDeviceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevicesRoutingModule { }
