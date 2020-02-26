import { AdminComponent } from './admin.component';
import { AuthComponent } from './auth.component';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGaurd } from './auth.gaurd';

let routing = RouterModule.forChild
([
    {path: "auth", component: AuthComponent},
    {path: "main", component: AdminComponent, canActivate: [AuthGaurd]},
    {path: "**", redirectTo: "auth"}
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing],
    providers: [AuthGaurd],
    declarations: [AuthComponent, AdminComponent]
})
export class AdminModule
{
    
}