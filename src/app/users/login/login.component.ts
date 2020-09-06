import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { RidesService } from 'src/app/rides.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  user: FormGroup;

  // user= {
  //   username: "",
  //   password: ""
  // }

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
      password: ""
    })
  }
  onSubmit(){
    this.rideSer.logIn(this.user.value);
    this.router.navigate(['/home'])
  }
}
