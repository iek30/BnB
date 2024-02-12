import { Injectable } from '@angular/core';
import { Discover } from '../model/discover';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiscoverService {

  private alojamientos:Discover[];
  private sujeto:BehaviorSubject<Discover[]>

  constructor() {
    this.alojamientos = [
      new Discover(1,'Alojamiento en la montaña', 'Bien', "https://ionicframework.com/docs/img/demos/card-media.png", 200,'linarescayetano@gmail.com'),
      new Discover(2,'Restaurante de lujo', 'Muy bien', "https://ionicframework.com/docs/img/demos/card-media.png", 300,'linarescayetano@gmail.com'),
      new Discover(3,'Casa rural', 'Hace frío', "https://ionicframework.com/docs/img/demos/card-media.png", 250,'clinmat3012@g.educaand.es')
    ]
    this.sujeto = new BehaviorSubject<Discover[]>(this.getAlojamientos())
  }

  getAlojamientos():Discover[]{
    return [...this.alojamientos]
  }

  getAlojamientosSubject():Observable<Discover[]>{
    return this.sujeto.asObservable()
  }

  addAlojamiento(nombre: String, descripcion: String, precio: number, correo:string): void {
    const nuevoAlojamiento = new Discover(this.generarId(), nombre, descripcion, 'https://ionicframework.com/docs/img/demos/card-media.png', precio,correo);
    this.alojamientos = [...this.alojamientos, nuevoAlojamiento];
    this.sujeto.next(this.getAlojamientos());
  }

  removeAlojamiento(id: number){
    const index = this.alojamientos.findIndex(discover => discover.id === id);

    if (index !== -1) {
      this.alojamientos.splice(index, 1);
      this.sujeto.next(this.getAlojamientos());
    }
  }

  updateAlojamiento(id:number, nombre: String, descripcion: String, imagen: any, precio: number):void{
    for (const alojamiento of this.getAlojamientos()) {
      if (alojamiento.id == id) {
        alojamiento.nombre = nombre
        alojamiento.descripcion = descripcion
        alojamiento.imagen=imagen;
        alojamiento.precio=precio;
      }
    }
    this.sujeto.next(this.getAlojamientos())
  }

  updateFoto(id:number, imagen:any):void{
    for (const item of this.getAlojamientos()) {
      if (item.id == id) item.imagen = imagen
    }
    this.sujeto.next(this.getAlojamientos())
  }

  private generarId():number{
    let idMasAlto = 0
    for (let index = 0; index < this.getAlojamientos().length; index++) {
      if (index == 0) idMasAlto =  this.getAlojamientos()[index].id
      else{
        if (this.getAlojamientos()[index].id > idMasAlto ) idMasAlto = this.getAlojamientos()[index].id
      }
    }
    return  idMasAlto + 1;
  }

}
