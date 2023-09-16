import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegesterComponent } from './regester/regester.component';
import { HomeComponent } from './home/home.component';
import { AdhomeComponent } from './adhome/adhome.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'reg',component:RegesterComponent},
  {path:'home',component:HomeComponent},
  {path:'adhome',component:AdhomeComponent},
  {path:'add',component:AddComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
