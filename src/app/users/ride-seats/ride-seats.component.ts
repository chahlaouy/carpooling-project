import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
@Component({
  selector: 'app-ride-seats',
  templateUrl: './ride-seats.component.html',
  styleUrls: ['./ride-seats.component.scss'],
})
export class RideSeatsComponent implements OnInit {

  numberOfSeats: any;
  constructor(
    private userSer: UserServiceService,
    private router: Router
  ) { }


  ngOnInit() {
  }

  nextStepRidePrice(){
    console.log(this.numberOfSeats);
    this.userSer.setNumberOfSeats(this.numberOfSeats);
    this.router.navigate(['add/ride-price']);
  }
}
