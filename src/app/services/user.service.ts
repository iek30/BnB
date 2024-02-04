import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users:User[]
  private actualUser?:string

  constructor() {
    this.users = [
      new  User("linarescayetano@gmail.com","123"),
      new  User("clinmat3012@g.educaand.es","123")
    ]
  }

  setUser(nuevo:string){
    this.actualUser = nuevo
  }

  getActualUser(){
    return this.actualUser
  }

  getUsers():User[]{
    return [...this.users]
  }

  comprobarAcceso(user:string, password:string):boolean{
    let usuarioEncontrado=this.users.find(u=> u.email=== user && u.password ===password)
    return !!usuarioEncontrado;
  }

}
