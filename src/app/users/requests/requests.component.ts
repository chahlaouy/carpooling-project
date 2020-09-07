import { Component, OnInit } from '@angular/core';
import { RidesService } from '../../rides.service';
@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss'],
})
export class RequestsComponent implements OnInit {

  requests= null;
  constructor(private ridServices: RidesService) { }

  ngOnInit() {
    this.initializeRequests();
  }

  initializeRequests(){
    this.requests = this.ridServices.getRequests();
    console.log(this.requests)
  }
}
