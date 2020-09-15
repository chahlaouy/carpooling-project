import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LoginComponent } from '../users/login/login.component';
import { RegisterComponent } from '../users/register/register.component'
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { RequestsComponent } from './requests/requests.component';
import { UserCarComponent } from './user-car/user-car.component';
import { UserReviewsComponent } from './user-reviews/user-reviews.component';
import { UserRidesComponent } from './user-rides/user-rides.component';
import { UserBoxComponent } from './user-box/user-box.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { MapModelComponent } from './map-model/map-model.component';
import { RideSourceComponent } from './ride-source/ride-source.component';
import { RideDestinationComponent } from './ride-destination/ride-destination.component';
import { RideSeatsComponent } from './ride-seats/ride-seats.component';
import { RidePriceComponent } from './ride-price/ride-price.component';

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
  {
    path: 'add/ride-source',
    component: RideSourceComponent,
  },
  {
    path: 'add/ride-destination',
    component: RideDestinationComponent,
  },
  {
    path: 'add/ride-seats',
    component: RideSeatsComponent,
  },
  {
    path: 'add/ride-price',
    component: RidePriceComponent,
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
    UserInfoComponent,
    MapModelComponent,
    RideSourceComponent,
    RideDestinationComponent,
    RideSeatsComponent,
    RidePriceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDK_H25782ntfx8P1phlMxs1KngoieEaYw',
      libraries: ['places']
    })
  ],
  exports: [RouterModule, IonicModule]
})
export class UsersModule { }
