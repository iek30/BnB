import { Component, OnInit } from '@angular/core';
import { DiscoverService } from '../services/discover.service';
import { AlertController } from '@ionic/angular';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit {

  nombre: any;
  descripcion: any;
  precio: any;
  correo:any

  constructor(private discoverService:DiscoverService, private alertController: AlertController, private userService:UserService) {
    this.correo = this.userService.getActualUser()
  }

  addNew() {
    if (this.nombre && this.descripcion && this.precio) this.discoverService.addAlojamiento(this.nombre,this.descripcion,'',this.precio,this.correo)
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
