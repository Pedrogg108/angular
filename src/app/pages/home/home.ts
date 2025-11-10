import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Celular } from '../../models/celular';
@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  public infoCelular: Celular[];
  constructor() {
    this.infoCelular = [
      {
        id: 1,
        nombre: "Samsung A06",
        marca: "Samsung",
        descripcion: "64GB/4GB Ram",
        precio:456000,
        img: "../../assets/A06.png",
        alt: "Samsung A06"
      },
      {
        id: 2,
        nombre: "Moto E14",
        marca: "Motorola",
        descripcion: "64GB/2GB Ram",
        precio:225000,
        img: "../../assets/motoe14.jpg",
        alt: "Moto E14"
      },
      {
        id: 3,
        nombre: "TCL 40SE",
        marca: "dEd",
        descripcion: "128GB/4GB Ram",
        precio:450000,
        img: "../../assets/tcl40se.jpg",
        alt: "TCL 40SE"
      },
      {
        id:4,
        nombre:"Samsung Z Flip 6",
        marca:"Samsung",
        descripcion:" 512GB/12GB Ram",
        precio:1950000,
        img:"../../assets/zflip6.jpg",
        alt:"Samsung Z Flip"
      },
      {
        id:4,
        nombre:"Moto G24",
        marca:"Motorola",
        descripcion:"128GB/8GB Ram",
        precio:350000,
        img:"../../assets/motog24.jpg",
        alt:"Moto G24"
      },
      {
        id:4,
        nombre:"S23 FE",
        marca:"Samsung",
        descripcion:"256GB/8GB Ram",
        precio:256000,
        img:"../../assets/s23fe.jpg",
        alt:"S23FE"
      }
    ]
  }
  celularSeleccionado: any = null
  verMas(celular: any) {
    this.celularSeleccionado = celular
  }
}
