import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Discover } from '../model/discover';
import { UserService } from '../services/user.service';
import { NavController } from '@ionic/angular';
import { DiscoverService } from '../services/discover.service';

@Component({
  selector: 'app-info-offer',
  templateUrl: './info-offer.page.html',
  styleUrls: ['./info-offer.page.scss'],
})
export class InfoOfferPage implements OnInit {

  discover?:Discover;

  constructor(private route: ActivatedRoute,private navCtrl:NavController) { }

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


  openEditPage(alojamiento: any) {
    const parametros = {
      id: alojamiento.id,
      nombre: alojamiento.nombre,
      descripcion:alojamiento.descripcion,
      imagen:alojamiento.imagen,
      precio:alojamiento.precio,
      correo:alojamiento.correo
    };
    this.navCtrl.navigateForward(['/edit-offer',parametros]);
  }

}
