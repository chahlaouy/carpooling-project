import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
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

  user=null;

  constructor( 
    private fb: FormBuilder,
    private authService: FirebaseService,
    private router:Router,
    private userService: UserServiceService
  ) { }

  ngOnInit() {
    this.user= this.userService.getCurrentUserInfo()
    console.log(this.user)
    this.initializeForm();
  }


  initializeForm(){ 
    this.userInfo = this.fb.group({ 
      username: this.user.username,
      email: this.user.email,
      gender: this.user.gender,
      picture: this.user.picture,
      phone: this.user.phone,
      age: this.user.age,
    })
  }

}
