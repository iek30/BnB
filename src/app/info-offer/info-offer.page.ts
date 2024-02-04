import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Discover } from '../model/discover';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-info-offer',
  templateUrl: './info-offer.page.html',
  styleUrls: ['./info-offer.page.scss'],
})
export class InfoOfferPage implements OnInit {

  discover?:Discover;

  constructor(private route: ActivatedRoute, private userService:UserService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const nombre = params['nombre'];
      this.discover = new Discover(nombre,'','',100,'this.userService.getActualUser()')
    });
  }

}
