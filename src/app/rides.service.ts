import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RidesService {

  data = [
    {
      name: "محمد بن زايد",
      price: "250",
      class: "", 
      expanded: true,
      details: {
        depart: "جدة",
        arrival: "الرياض",
        time: new Date()
      }
    },
    {
      name: "محمد بن زايد",
      price: "250",
      class: "yellow",
      expanded: true,
      details: {
        depart: "جدة",
        arrival: "الرياض",
        time: new Date()
      }
    },
    {
      name: "محمد بن زايد",
      price: "250",
      class: "",
      expanded: true,
      details: {
        depart: "جدة",
        arrival: "الرياض",
        time: new Date()
      }
    },
    {
      name: "محمد بن زايد",
      price: "250",
      class: "yellow",
      expanded: true,
      details: {
        depart: "جدة",
        arrival: "الرياض",
        time: new Date()
      }
    },
    
  ]

  requests=[
    {
      name: "john",
      age: "30",
      destination: "jeddah 1st ",
      currentLocation: "jeddah 1st ",
      nbSeats: 3
    },
    {
      name: "john",
      age: "30",
      destination: "jeddah 1st ",
      currentLocation: "jeddah 1st ",
      nbSeats: 3
    },
    {
      name: "john",
      age: "30",
      destination: "jeddah 1st ",
      currentLocation: "jeddah 1st ",
      nbSeats: 3
    },
    {
      name: "john",
      age: "30",
      destination: "jeddah 1st ",
      currentLocation: "riadh 1st ",
      nbSeats: 3
    }

  ]
  // currentUser = {
  //   name: "",
  //   email: "",
  //   phone: "",
  //   age: "",
  //   image: "",
  //   confirmPassword: "",
  //   gender: "",
  //   picture: ""
  // }
  currentUser = null;

  constructor() { }

  getrides(){
    return this.data;
  }

  logIn(user){
    this.currentUser = user
  }
  logOut(user){
    this.currentUser = null
  }

  getCurrentUser(){
    return this.currentUser
  }

  getRequests(){
    return this.requests
  }
}
