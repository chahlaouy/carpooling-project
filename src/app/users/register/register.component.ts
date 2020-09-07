import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { RidesService } from 'src/app/rides.service';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {


  user: FormGroup;
  authError: any;
  constructor(
    private fb: FormBuilder,
    private authService: FirebaseService,
    private router:Router
    ) { }

  ngOnInit() {
    this.initializeForm();
    this.authService.eventAuthError$.subscribe(data => {
      this.authError = data;
    })
  }


  initializeForm(){ 
    this.user = this.fb.group({
      username: "",
      password: "",
      email: "",
      gender: "",
      picture: "",
      phone: "",
      age: "",
      confirmationPassword: ""
    })
  }
  
  onSubmit(){
    this.authService.createDriver(this.user.value);
  }

}
