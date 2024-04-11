import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DevicesService } from '../devices.service';

@Component({
  selector: 'app-create-device',
  templateUrl: './create-device.component.html',
  styleUrls: ['./create-device.component.scss']
})
export class CreateDeviceComponent implements OnInit {
  newDeviceForm!: FormGroup;
  isLoading = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private devicesService: DevicesService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.newDeviceForm = this.formBuilder.group({
      deviceName: ['', Validators.required],
      model: ['', Validators.required],
      deviceManufacturer: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  back() {
    this.router.navigate(['lista-dispositivos']);
  }

  save() {
    if (this.newDeviceForm.valid) {
      this.isLoading = true;

      const deviceName = this.newDeviceForm.controls['deviceName'].value;
      const model = this.newDeviceForm.controls['model'].value;
      const deviceManufacturer = this.newDeviceForm.controls['deviceManufacturer'].value;
      const description = this.newDeviceForm.controls['description'].value;
      const newDevice = { deviceName: deviceName, model: model, deviceManufacturer: deviceManufacturer, description: description };

      this.devicesService.createNewDevice(newDevice).subscribe(() => {
        this.router.navigate(['lista-dispositivos']);
        this.isLoading = false;
      },
      (error) => {
        console.log('Problema ao cadastrar novo dispositivo', error);
        this.isLoading = false;
      });
    }
  }
}

