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
      new Discover('Alojamiento en la montaña', 'Bien', '', 200,'linarescayetano@gmail.com'),
      new Discover('Restaurante de lujo', 'Muy bien', '', 300,'linarescayetano@gmail.com'),
      new Discover('Casa rural', 'Hace frío', '', 250,'clinmat3012@g.educaand.es')
    ]
    this.sujeto = new BehaviorSubject<Discover[]>(this.getAlojamientos())
  }

  getAlojamientos():Discover[]{
    return [...this.alojamientos]
  }

  getAlojamientosSubject():Observable<Discover[]>{
    return this.sujeto.asObservable()
  }

  addAlojamiento(nombre: String, descripcion: String, imagen: any, precio: number,correo:string): void {
    const nuevoAlojamiento = new Discover(nombre, descripcion, imagen, precio,correo);
    this.alojamientos = [...this.alojamientos, nuevoAlojamiento];
    this.sujeto.next(this.getAlojamientos());
  }

  removeAlojamiento(nombre: String){
    const index = this.alojamientos.findIndex(discover => discover.nombre === nombre);

    if (index !== -1) {
      this.alojamientos.splice(index, 1);
      this.sujeto.next(this.getAlojamientos());
    }
  }

  addOfferImageUrl(nombre: string, imageUrl: string): void {
    let aux = this.getAlojamientos().find(aloj => aloj.nombre === nombre);

    if (aux) {
      aux.imagen = imageUrl;
      this.sujeto.next(this.getAlojamientos());
    }
  }

}
