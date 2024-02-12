import { User } from "./user"

export class Discover {
    id:number
    nombre:String
    descripcion:String
    imagen:any
    precio:number
    correo:string
    reservado:boolean
    constructor(id:number, nombre:String,descripcion:String,imagen:any,precio:number,correo:string){
        this.id=id;
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.imagen = imagen;
        this.precio=precio;
        this.correo=correo;
        this.reservado = false
    }    
}
