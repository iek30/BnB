import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiscoverService } from '../services/discover.service';
import { Discover } from '../model/discover';
import { UserService } from '../services/user.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  alojamientos:Discover[]

  constructor(private discoverService:DiscoverService, private router:Router, private userService:UserService, private navCtrl: NavController) {
    this.alojamientos = []
  }

  openAddPage() {
    this.router.navigate(['/new-offer']);
  }

  openInfoPage(alojamiento:any) {
    const parametros = {
      nombre: alojamiento.nombre,
      descripcion:alojamiento.descripcion,
      imagen:'',
      precio:alojamiento.precio,
      correo:alojamiento.correo
    };
    this.navCtrl.navigateForward(['/info-offer',parametros]);
  }

  borrar(borrado:String) {
    this.discoverService.removeAlojamiento(borrado)
  }

  ngOnInit() {
    this.discoverService.getAlojamientosSubject().subscribe(data=>{
      this.alojamientos = data.filter(discover => discover.correo === this.userService.getActualUser());
    })
  }


}
