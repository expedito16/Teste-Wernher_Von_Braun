import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { DevicesListComponent } from './devices-list/devices-list.component';
import { CreateDeviceComponent } from './create-device/create-device.component';
import { UpdateDeviceComponent } from './update-device/update-device.component';

const routes: Routes = [
  { path: 'lista-dispositivos', component: DevicesListComponent },
  { path: 'criar-dispositivo', component: CreateDeviceComponent },
  { path: 'editar-dispositivo/:id', component: UpdateDeviceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevicesRoutingModule { }
