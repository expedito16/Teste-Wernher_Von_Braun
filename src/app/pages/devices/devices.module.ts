import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DevicesRoutingModule } from './devices-routing.module';

//Components
import { DevicesListComponent } from './devices-list/devices-list.component';
import { CreateDeviceComponent } from './create-device/create-device.component';


@NgModule({
  declarations: [
    DevicesListComponent,
    CreateDeviceComponent
  ],
  imports: [
    CommonModule,
    DevicesRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class DevicesModule { }
