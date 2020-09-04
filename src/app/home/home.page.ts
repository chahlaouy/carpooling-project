import { Component, OnInit } from '@angular/core';
import { RidesService } from '../rides.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  rides = [];
  sliderConfig = {
    spaceBetween: 10,
    centeredSlides: false,
    slidesPerView: 1.6
  }

  constructor(private rideservic:RidesService, private router: Router) {}

  ngOnInit(){
    this.rides = this.rideservic.getrides();
  }

  loginIn(){
    this.router.navigate(['login']);
  }

}
