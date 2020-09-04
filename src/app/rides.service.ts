import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RidesService {

  data = [
    {
      name: "محمد بن زايد",
      price: "250",
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
      expanded: true,
      details: {
        depart: "جدة",
        arrival: "الرياض",
        time: new Date()
      }
    },
    
  ]
  constructor() { }

  getrides(){
    return this.data;
  }
}
