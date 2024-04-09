import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DevicesService } from '../devices.service';

@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.scss']
})
export class DevicesListComponent implements OnInit {
  devicesList: any[] = [];
  isLoading = false;

  constructor(
    private router: Router,
    private devicesService: DevicesService
  ) { }

  ngOnInit(): void {
    this.getDevicesList();
  }

  newDevice() {
    this.router.navigate(['criar-dispositivo']);
  }

  getDevicesList() {
    this.isLoading = true;
    this.devicesService.listDevices().subscribe((data) => {
      this.devicesList = data
      this.isLoading = false;
    });
  }
}
