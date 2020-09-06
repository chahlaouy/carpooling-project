import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../users/login/login.component';
import { RegisterComponent } from '../users/register/register.component'
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FavoriteComponent } from './favorite/favorite.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'favorite',
    component: FavoriteComponent,
  },
];


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    FavoriteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class UsersModule { }
