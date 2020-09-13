import { Injectable } from '@angular/core';
import {  AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { FirebaseService } from './firebase.service';
import { MapsAPILoader } from '@agm/core';

  // origin1 = { lat: 55.930, lng: -3.118 };
  // origin2 = 'Greenwich, England';
  // destinationA = 'Stockholm, Sweden'; 
  // destinationB = { lat: 50.087, lng: 14.421 };

@Injectable({
  providedIn: 'root' 
})
export class UserServiceService {
  
  private rideSource: any;
  private rideDestination: any;
  private rideNumberOfSeats: any;
  private rideCost: any;
  private rideDistance: any;
  private rideAverageDuration: any;

  constructor(
    private db: AngularFirestore,
    private firebaseService: FirebaseService,
    private router: Router,
    private mapsAPILoader: MapsAPILoader
  ) {}

  
  // getCurrentUserInfo(){  
    // rturns all the users collections
  //   this.db.collection(`users`).snapshotChanges().subscribe(data => {
  //     data.forEach(a => {
          // users is an array 
  //       this.users = a.payload.doc.data()
  //     })
  //   });
  // }

getCurrentsUserInfo(){
        
  return this.db.doc(`users/${localStorage.getItem('uid')}`).get()
 }

 addCar(car){
    return this.db.doc(`users/${localStorage.getItem('uid')}`).update({
      userCar: car
    })
  }

 addFavorite(favorite){
    return this.db.doc(`users/${localStorage.getItem('uid')}`).update({
      userFavorite: favorite
    })
  }

  setRideSource(source){
    this.rideSource = source;
  }
  setRideDestination(destination){
    this.rideDestination = destination;
  }

  setNumberOfSeats(seats){
    this.rideNumberOfSeats = seats;
  }

  async getRideDetails(){
    let rideDetails= {
      rideSource: this.rideSource,
      rideDestination: this.rideDestination,
      rideNumberOfSeats: this.rideNumberOfSeats,
      rideDistance: this.rideDistance,
      rideCost: this.rideCost,
      rideAverageDuration: this.rideAverageDuration
    }
     await this.getDistance();

    return rideDetails;
  }

  getDistance() {
    this.mapsAPILoader.load().then(() => {
      let service = new google.maps.DistanceMatrixService;
       service.getDistanceMatrix({
        origins: [{lat: this.rideSource.lat, lng:this.rideSource.lng}],
        destinations: [{lat: this.rideDestination.lat, lng:this.rideDestination.lng}],
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false,
        travelMode: google.maps.TravelMode.DRIVING,
      }, (resp, status) => {
        if (status !== 'OK') {
          alert('Error was: ' + status)
        } else {
          this.rideDistance = resp.rows[0].elements[0].distance.text;
          this.rideAverageDuration = resp.rows[0].elements[0].duration.text
          console.log("/////////////////////////////")
          console.log( this.rideDistance, this.rideAverageDuration)
        }
      })
    })
  }

}



