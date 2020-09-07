import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth'
import {  AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedIn = false;

  newDriver: any;

  private eventAuthError= new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();
  
  constructor(
    private angularFireAuth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router
  ) { }

  signIn(email: string, password: string){
    this.angularFireAuth.signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.eventAuthError.next(error)
      }).then(userCredentials => {
        if (userCredentials){
          this.router.navigate(['/home'])
        }
      })
  }
  async createDriver(driver){
    
    await this.angularFireAuth.createUserWithEmailAndPassword(driver.email, driver.password)
      .then(userCredentials => {
        console.log(userCredentials);
        this.newDriver = driver;
        userCredentials.user.updateProfile({
          displayName: driver.username
        })
        this.insertDriverData(userCredentials)
          .then(response => {
            console.log(response)
            this.router.navigate(["/user/dashboard"])
          })
      })
      .catch(error => {
        console.log(error)
        this.eventAuthError.next(error)
      })
  }

  insertDriverData(userCredentials: firebase.auth.UserCredential){
    return this.db.doc(`users/${userCredentials.user.uid}`).set({
      role: "driver",
      gender: "male",
      username: "",
      email: this.newDriver.email,
      picture: "",
      phone: "",
      age: "29",
    })
  }

  getUserState(){
    return this.angularFireAuth.authState;
  }
  signOut(){
    return this.angularFireAuth.signOut();
  }



}







  
  // async signUp(email: string, password: string){
  //   await this.angularFireAuth.createUserWithEmailAndPassword(email, password)
  //     .then(response => {
  //       this.isLoggedIn = true;
  //       localStorage.setItem('user', JSON.stringify(response.user))
  //     })
  // }
  // signOut(email: string, password: string){
  //   this.angularFireAuth.signOut();
  //   localStorage.removeItem('user')
  // }

