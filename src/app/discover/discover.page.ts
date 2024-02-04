import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiscoverService } from '../services/discover.service';
import { Discover } from '../model/discover';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  alojamientos:Discover[]

  constructor(private discoverService:DiscoverService, private userService:UserService) {
    this.alojamientos = []
  }

  ngOnInit() {
    this.discoverService.getAlojamientosSubject().subscribe(data=>{
      this.alojamientos = data.filter(discover => discover.correo !== this.userService.getActualUser());

    })
  }

}
