import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Discover } from '../model/discover';
import { PhotoService } from '../services/photo.service';
import { DiscoverService } from '../services/discover.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {

  discover?:Discover;

  actionSheetButtons = [
    {
      text: 'Cámara',
      handler: () => this.pickFromCamera(),
    },
    {
      text: 'Galería',
      handler: () => this.pickFromGallery(),
    },
    {
      text: 'Cancelar',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  constructor(private router:Router, private route: ActivatedRoute, private photoService:PhotoService, private discoverService:DiscoverService) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      const id = params['id']
      const nombre = params['nombre']
      const precio = params['precio']
      const imagen = params['imagen']
      const descripcion = params['descripcion']
      const correo = params['correo']
      this.discover = new Discover(id,nombre,descripcion,imagen,precio,correo)
    });
  }

  async pickFromCamera(): Promise<void> {
    let imageUrl = await this.photoService.takePhoto();
    
    if (imageUrl) {
      this.discoverService.updateFoto(this.discover!.id,imageUrl)
    }
  }

  async pickFromGallery(): Promise<void> {
    let imageUrl = await this.photoService.pickFromGallery();
    
    if (imageUrl) {
      this.discoverService.updateFoto(this.discover!.id,imageUrl)
    }
  }

  guardarCambios():void{
    this.discoverService.updateAlojamiento(
      this.discover!.id,
      this.discover!.nombre,
      this.discover!.descripcion, 
      this.discover!.imagen, 
      this.discover!.precio
    )
    //this.router.navigate(['/offers'])
  }

}
