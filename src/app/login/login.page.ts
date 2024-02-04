import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user:any
  password:any

  constructor(private router:Router, private userService:UserService) { }

  iniciarSesion() {
    if (this.userService.comprobarAcceso(this.user,this.password)){
      this.userService.setUser(this.user)
      this.router.navigate(['/places']);
    }
    else alert('Usuario o contraseña incorrecta');
  }

  ngOnInit() {
  }

}
