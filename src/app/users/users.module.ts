import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LoginComponent } from '../users/login/login.component';
import { RegisterComponent } from '../users/register/register.component'
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { RequestsComponent } from './requests/requests.component';
import { UserCarComponent } from './user-car/user-car.component';
import { UserReviewsComponent } from './user-reviews/user-reviews.component';
import { UserRidesComponent } from './user-rides/user-rides.component';
import { UserBoxComponent } from './user-box/user-box.component';
import { UserInfoComponent } from './user-info/user-info.component';


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
  {
    path: 'requests',
    component: RequestsComponent,
  },
  {
    path: 'car',
    component: UserCarComponent,
  },
  {
    path: 'rides',
    component: UserRidesComponent,
  },
  {
    path: 'reviews',
    component: UserReviewsComponent,
  },
  {
    path: 'box',
    component: UserBoxComponent,
  },
  {
    path: 'info',
    component: UserInfoComponent,
  },
];


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    FavoriteComponent,
    RequestsComponent,
    UserBoxComponent,
    UserReviewsComponent,
    UserRidesComponent,
    UserCarComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule, IonicModule]
})
export class UsersModule { }
