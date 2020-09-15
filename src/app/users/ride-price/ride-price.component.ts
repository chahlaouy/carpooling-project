import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-ride-price',
  templateUrl: './ride-price.component.html',
  styleUrls: ['./ride-price.component.scss'],
})
export class RidePriceComponent implements OnInit {


  ridePrice: any;
  permittedRidePrice: [];
  rideDistance= this.userSer.getRideDetails().rideDistance.value;

  lessThan100Km = (this.rideDistance/1000) < 100;
  between100And200Km = (this.rideDistance/1000) > 100 && (this.rideDistance/1000) < 200;
  between200And300Km = (this.rideDistance/1000) > 200 && (this.rideDistance/1000) < 300;
  between300And400Km = (this.rideDistance/1000) >= 300 && (this.rideDistance/1000) < 400;
  between400And700Km = (this.rideDistance/1000) >= 400 && (this.rideDistance/1000) < 700;
  moreThan700Km = (this.rideDistance/1000) >= 700;
  

  constructor(
    private userSer: UserServiceService,
    private router: Router
  ) { }


  ngOnInit() {
    this.getPermittedPrice();
    console.log(this.lessThan100Km, this.between100And200Km, this.between200And300Km, this.between300And400Km, this.between400And700Km, this.moreThan700Km)
  }

  getPermittedPrice(){
    // switch ((this.rideDistance/100)){
    //   case < 
    // }
  }
  nextStep(){
    this.userSer.setNumberOfSeats(this.ridePrice);
    console.log(this.userSer.getRideDetails().rideDistance.value);
    // this.router.navigate(['add/ride-price']);
  }
}
