import { Component } from '@angular/core';
import { Celular } from '../../../../models/celular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-marcas',
  imports: [CommonModule],
  templateUrl: './marcas.html',
  styleUrl: './marcas.css'
})
export class Marcas {
  public infoMarca: Celular[]
  constructor() {
    this.infoMarca = [
      {
        id: 1,
        nombre: "tab",
        marca: "chansung",
        descripcion: "descrip1",
        precio: 12000,
        img: "../../../assets/celu11.jpg",
        alt: "string"
      },
      {
        id: 2,
        nombre: "tab",
        marca: "chansung",
        descripcion: "descrip1",
        precio: 12000,
        img: "../../../assets/celu11.jpg",
        alt: "string"
      }
    ]
  }
  marcaSeleccionado:any
  verMas(marca: any) {
    this.marcaSeleccionado = marca

  }
}
