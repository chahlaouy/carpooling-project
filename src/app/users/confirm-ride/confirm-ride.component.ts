import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-confirm-ride',
  templateUrl: './confirm-ride.component.html',
  styleUrls: ['./confirm-ride.component.scss'],
})
export class ConfirmRideComponent implements OnInit {

  rideInfo: any
  constructor(
    private router: Router,
    private userService: UserServiceService
  ) { }

  ngOnInit() {
    this.rideInfo = this.userService.getRideDetails();
  }

  confirmRide(){
    this.userService.confirmRide()
  }
}
