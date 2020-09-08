import { Injectable } from '@angular/core';
import {  AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root' 
})
export class UserServiceService {
  
  constructor(
    private db: AngularFirestore,
    private firebaseService: FirebaseService,
    private router: Router
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


}

