import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import * as firebase from 'firebase'

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private uploadTask: firebase.storage.UploadTask;

  isLoggedIn = false;

  newDriver: any;

  currentUser: any;

  driverInterface = {
    gender: "",
    username: "",
    email: "",
    picture: "",
    phone: "",
    age: "",
    car: {
      brand: "",
      model: "",
      state: "",
      serialNumber: ""
    },
    favorite: {
      pets: "",
      smoking: "",
      music: "",
      chat: ""
    },
    reviews: {
      authorName: "",
      authorProfilePicture: "",
      headLine: "",
      body: "",
      rating: ""
    },
    trips: {
      destination: "",
      source: "",
      price: "",
      numberSeats: "",
      timeToLeave: ""
    }
  }

  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();

  constructor(
    private angularFireAuth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router
  ) { }

  signIn(email: string, password: string) {
    this.angularFireAuth.signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.eventAuthError.next(error)
      }).then(userCredentials => {
        if (userCredentials) {
          this.currentUser = userCredentials.user;
          localStorage.setItem('uid', userCredentials.user.uid)
          this.router.navigate(['/home'])
        }
      })
  }
  async createDriver(driver) {

    await this.angularFireAuth.createUserWithEmailAndPassword(driver.email, driver.password)
      .then(userCredentials => {

        this.newDriver = driver;
        localStorage.setItem('uid', userCredentials.user.uid)
        userCredentials.user.updateProfile({
          displayName: driver.username
        })
        this.insertDriverData(userCredentials)
          .then(response => {
            this.router.navigate(["/user/dashboard"])
          })
        firebase.storage().ref(`users/${userCredentials.user.uid}/profile.png`).put(driver.picture)
          .then(rep =>{
            console.log(rep)
          }).catch(error => {
            console.log(error)
          })
      })
      .catch(error => {
        console.log(error)
        this.eventAuthError.next(error)
      })
  }

  insertDriverData(userCredentials: firebase.auth.UserCredential) {
    return this.db.doc(`users/${userCredentials.user.uid}`).set({
      gender: this.newDriver.gender,
      username: this.newDriver.username,
      email: this.newDriver.email,
      picture: this.newDriver.picture,
      phone: this.newDriver.phone,
      age: this.newDriver.age,
    })
  }

  getUserState() {
    return this.angularFireAuth.authState;
  }
  getUser() {
    return this.currentUser;
  }
  signOut() {
    return this.angularFireAuth.signOut().then(() => {
      localStorage.removeItem("uid")
    });
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

