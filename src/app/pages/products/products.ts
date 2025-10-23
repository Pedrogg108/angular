import { Component } from '@angular/core';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { Tarjeta } from '../../models/tarjeta';
@Component({
  selector: 'app-products',
  imports: [CommonModule],
=======

@Component({
  selector: 'app-products',
  imports: [],
>>>>>>> ba1aa79679156860d1a164ca6e9097b50928a102
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
<<<<<<< HEAD
  // Propiedad pública: Libre acceso a su contenido
  // Privada : Contenido restringido
  public infoTarjeta: Tarjeta[];
  constructor() {
    this.infoTarjeta = [
      {
        id: "1T",
        img: "../../../assets/Apple-iphone-14-pro-max-gold-select.png",
        alt: "",
        titulo: "celu1",
        descripcion: "algo",
        anualPublicacion: 2025

      },
      {
        id: "2T",
        img: "../../../assets/pexels-changerstudio-140831.jpg",
        alt: "",
        titulo: "celu2",
        descripcion: "algo2",
        anualPublicacion: 2025

      },
      {
        id: "3T",
        img: "../../../assets/pexels-mar-neyra-2151796395-32554156.jpg",
        alt: "",
        titulo: "celu3",
        descripcion: "algo3",
        anualPublicacion: 2025

      }
    ]
  }
  tarjetaSeleccionada: any = null;

  verMas(tarjeta:any){
    this.tarjetaSeleccionada = tarjeta
  }
}
=======

}
>>>>>>> ba1aa79679156860d1a164ca6e9097b50928a102
