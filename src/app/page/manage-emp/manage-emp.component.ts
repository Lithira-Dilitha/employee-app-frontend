import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

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
  constructor(private http:HttpClient){}
  addEmployee(){
    console.log(this.employeeobj);
    
    this.http.post("http://localhost:8080/emp-controller/employee",this.employeeobj).subscribe(
      (data)=>{
        Swal.fire({
          title: "Employee Added !",
          text: "You clicked the button!",
          icon: "success"
        });
      }
    )
  }
}
