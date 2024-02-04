import { User } from "./user"

export class Discover {
    nombre:String
    descripcion:String
    imagen:any
    precio:number
    correo:string
    constructor(nombre:String,descripcion:String,imagen:any,precio:number,correo:string){
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.imagen = imagen;
        this.precio=precio;
        this.correo=correo;
    }    
}
