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
    },
    (error) => {
      console.log('Problema ao carregar lista', error);
    });
  }

  updateDevice(id: number) {
    this.router.navigate(['editar-dispositivo', id]);
  }

  deleteDevice(event: any, id: number) {
    if (confirm('Deseja excluir o dispositivo ?')) {
      this.isLoading = true;
      event.target.innerText = "Deleting..."
      this.devicesService.deleteDeviceById(id).subscribe(() => {
        this.getDevicesList();
        event.target.innerText = "Deleted"
        this.isLoading = false;
      }, (error) => {
        console.log('Problema ao tentar deletar', error);
        this.isLoading = false;
      });
    }
  }
}
