import { Component, OnInit } from '@angular/core';
import { RidesService } from '../rides.service'
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

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
    slidesPerView: 1.4
  }

  currentUser= null;

  constructor(
    private rideservic:RidesService,
    private router: Router,
    private firebaseService: FirebaseService
    ) {}

  ngOnInit(){
    this.rides = this.rideservic.getrides();

    this.firebaseService.getUserState()
    .subscribe(user => {
      this.currentUser = user
      // console.log(this.currentUser)
    })
    

    // this.firebaseService.signOut()
  }





  loginIn(){
    this.router.navigate(['login']);
  }
  pushList(){
    this.router.navigate(['home/list'])
  }
  pushLogin(){
    this.router.navigate(['register'])
  }
}
