import { Routes } from '@angular/router';
import { ManageEmpComponent } from './page/manage-emp/manage-emp.component';
import { ViewAllEmployeesComponent } from './page/view-all-employees/view-all-employees.component';

export const routes: Routes = [
    {
        path:"add-employee",
        component:ManageEmpComponent
    },
    {
        path:"view-all-employee",
        component:ViewAllEmployeesComponent
    }
];
