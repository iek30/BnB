import { Component, OnInit } from '@angular/core';
import { DiscoverService } from '../services/discover.service';
import { Discover } from '../model/discover';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

  reservas?:Discover[]

  constructor(private discoverService:DiscoverService, private userService:UserService) { }

  ngOnInit() {
    this.discoverService.getAlojamientosSubject().subscribe(data=>{
      this.reservas = data.filter(discover => discover.correo !== this.userService.getActualUser() && discover.reservado == true);
    })
  }

}
