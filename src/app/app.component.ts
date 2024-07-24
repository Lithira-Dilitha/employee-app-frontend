import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ManageEmpComponent } from './page/manage-emp/manage-emp.component';
import { ViewAllEmployeesComponent } from './page/view-all-employees/view-all-employees.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ManageEmpComponent,ViewAllEmployeesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'emp-app';
}
