import { Component, OnInit } from '@angular/core';
import { DiscoverService } from '../services/discover.service';
import { AlertController, NavController } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { PhotoService } from '../services/photo.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit {

  offer: any;
  nombre: any;
  descripcion: any;
  precio: any;
  correo:any

  constructor(private navCrtl:NavController, private discoverService:DiscoverService, private alertController: AlertController, private userService:UserService, private photoService:PhotoService) {
    this.correo = this.userService.getActualUser()
  }

  addNew() {
    if (this.nombre && this.descripcion && this.precio) {
      this.discoverService.addAlojamiento(this.nombre,this.descripcion,this.precio,this.correo)
      this.navCrtl.back()
    }
    else this.mostrarAlerta('Todos los campos son obligatorios');
  }

  private async mostrarAlerta(mensaje: string): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Atention!',
      message: mensaje,
      buttons: ['OK'],
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
