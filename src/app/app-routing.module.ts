import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [

  {
    path:"",
    component:DepartmentComponent
  },

  {
    path:"category/:name", // ye line baad m samjhata hu 
    component:CategoryComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
