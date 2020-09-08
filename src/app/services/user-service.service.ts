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
  ) { }

  
getCurrentUserInfo(){
  this.firebaseService.getUserState()
      .subscribe(user => {
        return this.db.collection(`users/${user.uid}`);
      })
}


}

