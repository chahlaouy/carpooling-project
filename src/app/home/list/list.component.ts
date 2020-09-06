import { Component, OnInit } from '@angular/core';
import { RidesService } from '../../rides.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  rides = [];

  constructor(private rideservic:RidesService, private router: Router) { }

  ngOnInit() {
    this.rides = this.rideservic.getrides(); 
  }

  pushHome(){
    this.router.navigate(['home'])
  }

}
