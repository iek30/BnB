import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiscoverService } from '../services/discover.service';
import { Discover } from '../model/discover';
import { UserService } from '../services/user.service';
import { ModalComponent } from '../modal/modal.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  alojamientos:Discover[]

  constructor(private modalCtrl:ModalController, private discoverService:DiscoverService, private userService:UserService) {
    this.alojamientos = []
  }

  async abrirModal() {
    const modal = await this.modalCtrl.create({
      component: ModalComponent
    });
    return await modal.present();
  }

  onClickReservar(discover:Discover){
    if (!discover.reservado){
      discover.reservado = true
      this.abrirModal()
    }
  }

  ngOnInit() {
    this.discoverService.getAlojamientosSubject().subscribe(data=>{
      this.alojamientos = data.filter(discover => discover.correo !== this.userService.getActualUser());
    })
  }

}
