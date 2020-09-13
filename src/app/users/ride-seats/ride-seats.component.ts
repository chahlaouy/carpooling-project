import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-ride-seats',
  templateUrl: './ride-seats.component.html',
  styleUrls: ['./ride-seats.component.scss'],
})
export class RideSeatsComponent implements OnInit {

  constructor(
    private userSer: UserServiceService,
  ) { }

  ngOnInit() {
    // this.userSer.getDistance(
    //   this.userSer.getRideSource(), this.userSer.getRideDestination()
    // )
    // console.log('/////////////////////////////////')
    // console.log(this.userSer.getRideSource());
    // console.log(this.userSer.getRideDestination());
    console.log(this.userSer.getRideDetails())
  }

}
