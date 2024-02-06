import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Discover } from '../model/discover';
import { PhotoService } from '../services/photo.service';
import { DiscoverService } from '../services/discover.service';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {

  discover:any;

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

  constructor(private route: ActivatedRoute, private photoService:PhotoService, private discoverService:DiscoverService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const nombre = params['nombre'];
      const precio = params['precio'];
      const descripcion = params['descripcion'];
      this.discover = new Discover(nombre,descripcion,'',precio,'this.userService.getActualUser()')
    });
  }

  async pickFromCamera(): Promise<void> {
    let imageUrl = await this.photoService.takePhoto();
    
    if (imageUrl) {
      this.discover.imageUrl = imageUrl;
      this.addOfferImageUrl(this.discover.nombre, imageUrl);
    }
  }

  async pickFromGallery(): Promise<void> {
    let imageUrl = await this.photoService.pickFromGallery();
    
    if (imageUrl) {
      this.discover.imageUrl = imageUrl;
      this.addOfferImageUrl(this.discover.nombre, imageUrl);
    }
  }

  addOfferImageUrl(nombre: string, imageUrl: string): void {
    this.discoverService.addOfferImageUrl(nombre, imageUrl);
  }

}
