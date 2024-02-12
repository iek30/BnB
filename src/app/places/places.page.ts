import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {


  constructor(private router:Router, private navCtrl:NavController) { }

  verDiscover(){
    this.router.navigate(['/discover'])
  }

  volverInicio(){
    this.navCtrl.back()
  }

  verReservas(){
    this.router.navigate(['/booking'])
  }


  ngOnInit() {
  }

}
