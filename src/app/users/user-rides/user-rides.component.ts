import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular'
import { MapModelComponent } from '../map-model/map-model.component';


@Component({
  selector: 'app-user-rides',
  templateUrl: './user-rides.component.html',
  styleUrls: ['./user-rides.component.scss'],
})
export class UserRidesComponent implements OnInit {



  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  

  async openModal(){
    const modal = await this.modalCtrl.create({
      component:  MapModelComponent
    });

    await modal.present()
  }

}
