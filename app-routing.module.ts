import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import{loginService} from './services/loginService/loginService'

const routes: Routes = [
    {path: "login", component: LoginComponent},
    {path: "admin", component : AdminComponent},
    {path:"", redirectTo: "login", pathMatch: "full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }