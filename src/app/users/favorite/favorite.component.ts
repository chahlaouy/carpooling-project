import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent implements OnInit {


  userFavorite: FormGroup;
  currentFavorite: null 
  constructor(
    private fb: FormBuilder,
    private router:Router,
    private userService: UserServiceService
  ) { }

  ngOnInit() {
    this.initializeForm();
    this.userService.getCurrentsUserInfo().subscribe(a=>{
      this.currentFavorite = a.data().userFavorite;
     });
  }

  initializeForm(){
    this.userFavorite = this.fb.group({
      pets: false,
      smoking: false,
      music: false,
      chat: false
    })
  }
  
  onSubmit(){
    this.userService.addFavorite(this.userFavorite.value)
      .then(response => {
        this.ngOnInit()
      }).catch(error => {
        console.log(error)
      })
  }
}
