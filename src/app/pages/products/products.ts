import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tarjeta } from '../../models/tarjeta';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  // Propiedad pública: Libre acceso a su contenido
  // Privada : Contenido restringido
  public infoTarjeta: Tarjeta[];
  constructor() {
    this.infoTarjeta = [
      {
        id: "1T",
        img: "../../../assets/descarga-_1_.png",
        alt: "",
        titulo: "celu1",
        descripcion: "algo",
        anualPublicacion: 2025

      },
      {
        id: "2T",
        img: "../../../assets/descarga-_1_.png",
        alt: "",
        titulo: "celu2",
        descripcion: "algo2",
        anualPublicacion: 2025

      },
      {
        id: "3T",
        img: "../../../assets/descarga-_1_.png",
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