import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { RidesService } from './rides.service';
import { Router } from '@angular/router';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html', 
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  
  currentUser: firebase.User;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private firebaseService: FirebaseService

  ) {
    
    this.initializeApp();
  }
  
  ngOnInit(){
    this.firebaseService.getUserState()
      .subscribe(user => {
        this.currentUser = user
        // console.log(this.currentUser)
      })
     
  }
  initializeApp() {
    this.platform.ready().then(() => {
    this.statusBar.styleDefault();
    this.splashScreen.hide();
    });

  }

  onLogout(){
    this.firebaseService.signOut();
    this.router.navigate(['/home'])
  }
}
