import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent implements OnInit {


  userFavorite: FormGroup;
   
  constructor(
    private fb: FormBuilder,
    private router:Router
  ) { }

  ngOnInit() {
    this.initializeForm()
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
    console.log(this.userFavorite.value)
  }
}
