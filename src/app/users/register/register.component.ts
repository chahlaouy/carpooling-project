import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { RidesService } from 'src/app/rides.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {


  user: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private rideSer:RidesService,
    private router:Router
    ) { }

  ngOnInit() {
    this.initializeForm()
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
    this.rideSer.logIn(this.user.value);
    this.router.navigate(['/home'])
  }

}
