import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit{


  constructor(private category:CategoryService,private route:ActivatedRoute){}

  allCategoryData:any[]=[]; // ye ek blank array banaya h jis m hum pehle sari categories dale ge 
  filterdCategoryData:any[]=[]

  ngOnInit(): void {
    
    let param = this.route.snapshot.paramMap.get("name"); // is line se hum vo jo path se hum url m name bhej rhe the ab use catch kr rhe h or upar humne activedroute jo inject kiya h vo bss help krta h url se catch krne m 

    this.category.getCategoryData().subscribe((response)=>{

      this.allCategoryData = response
                   
    //   ye loop chala rhe h hum allCategoryData ke liye iske andr sari category h humari hum loop se har category ko check kre ge 

      for (let i = 0; i < this.allCategoryData.length; i++) {

        // if ye check kr rhi h ki jo url pe name bheja h vo name or all category ke category ka name match ho rha h agr haa to hum filterd wale array m us category ko push krdenge 

        if (param === this.allCategoryData[i].category) {
          
          this.filterdCategoryData.push(this.allCategoryData[i]);                   

        }

      }

    })

    // ab sari categoris ja chuki h allCategoryData array m ab hum ek array or banake us m filterd category dale ge matlb vo wali jo department ke name se match hongi

  }
}
