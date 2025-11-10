import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Celular } from '../../../../models/celular';

@Component({
  selector: 'app-accesorios',
  imports: [CommonModule],
  templateUrl: './accesorios.html',
  styleUrl: './accesorios.css'
})
export class Accesorios {
  public infoAccesorios: Celular[]
  constructor() {
    this.infoAccesorios = [
      {
      id: 1,
      nombre: "Redmi Buds 6",
      marca:"Xioami",
      descripcion:"Bluetooth 5.4/  6 hs de bateria",
      precio:34000,
      img:"../../../assets/buds6.jpeg",
      alt:"Redmi Buds 6"
    },
    {
      id: 2,
      nombre: "Funda Verde del Galaxy S24",
      marca:"Xioami",
      descripcion:"Funda de plastico",
      precio:34000,
      img:"../../../assets/fundas24.png",
      alt:"Funda s24"
    },
    {
      id: 3,
      nombre: "Samsung R180 Buds",
      marca:"Samsung",
      descripcion:"Bluetooth 5.4/ 21 hs de bateria",
      precio:122000,
      img:"../../../assets/r180.jpg",
      alt:"Samsung R180 Buds"
    }

    ]
  }
  accesorioSeleccionado:any=null
  verMasAccesorios(accesorio:any){
    this.accesorioSeleccionado=accesorio
  }
}
