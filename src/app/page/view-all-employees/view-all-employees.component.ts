import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-all-employees',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './view-all-employees.component.html',
  styleUrl: './view-all-employees.component.css'
})
export class ViewAllEmployeesComponent {
public employeeList:any;

  constructor(private http:HttpClient){
    this.loadAllEmployees(); 
  }

  deleteEmployee(employee:any){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        this.http.delete(`http://localhost:8080/emp-controller/employee/${employee.id}`,{responseType:'text'}).subscribe((res)=>{
            this.loadAllEmployees()
            swalWithBootstrapButtons.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            console.log(res);
            
          }
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    });
    console.log(employee);
    
  }

  loadAllEmployees(){
    this.http.get("http://localhost:8080/emp-controller/employees").subscribe(
      (res)=>{
        this.employeeList = res
        console.log(res);
      }
    )
  }
}
