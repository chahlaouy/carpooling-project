import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';

import {  AngularFirestore } from '@angular/fire/firestore';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {


  userInfo : FormGroup;
  
  disabledVar= true;

  currentUser= null;

  constructor( 
    private fb: FormBuilder,
    private router:Router,
    private userService: UserServiceService
  ) { }

  ngOnInit() {
    this.userService.getCurrentsUserInfo().subscribe(a=>{
      this.currentUser = a.data()
     });
  }

  
  
}
