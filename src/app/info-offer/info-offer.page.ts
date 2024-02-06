import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Discover } from '../model/discover';
import { UserService } from '../services/user.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-info-offer',
  templateUrl: './info-offer.page.html',
  styleUrls: ['./info-offer.page.scss'],
})
export class InfoOfferPage implements OnInit {

  discover?:Discover;

  constructor(private route: ActivatedRoute, private userService:UserService, private navCtrl:NavController) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const nombre = params['nombre'];
      const precio = params['precio'];
      const descripcion = params['descripcion'];
      this.discover = new Discover(nombre,descripcion,'',precio,'this.userService.getActualUser()')
    });
  }

  openEditPage(alojamiento: any) {
    const parametros = {
      nombre: alojamiento.nombre,
      descripcion:alojamiento.descripcion,
      imagen:'',
      precio:alojamiento.precio,
      correo:alojamiento.correo
    };
    this.navCtrl.navigateForward(['/edit-offer',parametros]);
  }

}
