import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-emp',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule],
  templateUrl: './manage-emp.component.html',
  styleUrl: './manage-emp.component.css'
})
export class ManageEmpComponent {
  public employeeobj = {
    firstName:"",
    lastName:"",
    email:"",
    departmentId:"",
    roleId:""
  }
  addEmployee(){
    console.log(this.employeeobj);
  }
}
