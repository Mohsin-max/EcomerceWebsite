import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit{

  constructor(private departmentservice:DepartmentService){}

  allDepartmentData:any[]=[];

  ngOnInit(): void {

    this.departmentservice.getDepartmentData().subscribe((response)=>{

      this.allDepartmentData = response;

    })
    
  }

}
