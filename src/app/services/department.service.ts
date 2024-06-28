import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http:HttpClient) { }

  getDepartmentData():Observable<any>{

    return this.http.get<any>("https://cp.fsglobaltech.com:8443/FASHION_API/departments/findAll");

  }
}
