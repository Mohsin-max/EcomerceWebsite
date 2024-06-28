import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  getCategoryData():Observable<any>{

    return this.http.get<any>("https://cp.fsglobaltech.com:8443/FASHION_API/category/findAll");

  }

}
