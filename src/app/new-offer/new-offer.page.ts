import { Component, OnInit } from '@angular/core';
import { DiscoverService } from '../services/discover.service';
import { AlertController } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { PhotoService } from '../services/photo.service';


@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit {

  course: any;
  nombre: any;
  descripcion: any;
  precio: any;
  correo:any

  constructor(private discoverService:DiscoverService, private alertController: AlertController, private userService:UserService, private photoService:PhotoService) {
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

  async pickFromCamera(): Promise<void> {
    let imageUrl = await this.photoService.takePhoto();
    
    if (imageUrl) {
      this.course.imageUrl = imageUrl;
      this.addCourseImageUrl(this.course['id'], imageUrl);
    }
  }

  async pickFromGallery(): Promise<void> {
    let imageUrl = await this.photoService.pickFromGallery();
    
    if (imageUrl) {
      this.course.imageUrl = imageUrl;
      this.addCourseImageUrl(this.course['id'], imageUrl);
    }
  }

  addCourseImageUrl(id: string, imageUrl: string): void {
    //this.coursesService.addCourseImageUrl(id, imageUrl);
  }

  ngOnInit() {
  }

}
