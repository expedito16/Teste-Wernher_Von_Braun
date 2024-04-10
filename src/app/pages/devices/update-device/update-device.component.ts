import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DevicesService } from '../devices.service';

@Component({
  selector: 'app-update-device',
  templateUrl: './update-device.component.html',
  styleUrls: ['./update-device.component.scss']
})
export class UpdateDeviceComponent implements OnInit {
  updateDeviceForm!: FormGroup;
  isLoading = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private devicesService: DevicesService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.getDeviceDetails();
  }

  initForm() {
    this.updateDeviceForm = this.formBuilder.group({
      deviceName: ['', Validators.required],
      model: ['', Validators.required],
      deviceManufacturer: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  getDeviceDetails() {
    this.isLoading = true;
    const id = this.route.snapshot.params['id'];
    this.devicesService.getDeviceById(id).subscribe((data) => {
      this.updateDeviceForm.patchValue({
        deviceName: data.deviceName,
        model: data.model,
        deviceManufacturer: data.deviceManufacturer,
        description: data.description
      });
      this.isLoading = false;
    });
  }

  back() {
    this.router.navigate(['lista-dispositivos']);
  }

  save() {
    if (this.updateDeviceForm.valid) {
      this.isLoading = true;

      const id = this.route.snapshot.params['id'];
      const deviceData = this.updateDeviceForm.value;
      this.devicesService.updateDevice(id, deviceData).subscribe(
        () => {
          this.router.navigate(['lista-dispositivos']);
          this.isLoading = false;
        },
        error => {
          console.error(error);
          this.isLoading = false;
        });
    }
  }

}
