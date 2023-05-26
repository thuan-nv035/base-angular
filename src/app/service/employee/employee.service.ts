import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private _http: HttpClient) {}

  apiUrl: string = environment.apiUrl

  addEmployee(data: any): Observable<any> {
    return this._http.post(this.apiUrl, data);
  }

  updateEmployee(id: number, data: any): Observable<any> {
    return this._http.put(`${this.apiUrl}/${id}`, data);
  }

  getEmployeeList(): Observable<any> {
    return this._http.get(this.apiUrl);
  }

  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(`${this.apiUrl}/${id}`);
  }
}
