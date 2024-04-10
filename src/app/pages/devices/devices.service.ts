import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {
  url = 'http://localhost:3000/lista-dispositivos';

  constructor(
    private http: HttpClient
  ) { }

  listDevices(): Observable<any> {
    return this.http.get(this.url);
  }

  createNewDevice(newDevice: any): Observable<any> {
    return this.http.post(this.url, newDevice);
  }

  getDeviceById(id: number): Observable<any>{
    return this.http.get(`${this.url}/${id}`);
  }

  updateDevice(id: number, device: any): Observable<any>{
    return this.http.put(`${this.url}/${id}`, device);
  }

  deleteDeviceById(id: number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }
}
