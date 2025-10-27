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
        id: 12,
        nombre: "celu1",
        marca: "dad",
        descripcion: "descripcion1",
        img: "../../assets/descarga-_1_.png",
        alt: "celu1"
      },
      {
        id: 22,
        nombre: "celu2",
        marca: "dEd",
        descripcion: "descripcion2",
        img: "./../assets/descarga-_1_.png",
        alt: "celu2"
      },
      {
        id: 22,
        nombre: "celu3",
        marca: "dEd",
        descripcion: "descripcion2",
        img: "./../assets/descarga-_1_.png",
        alt: "celu2"
      }
    ]
  }
  celularSeleccionado: any = null
  verMas(celular: any) {
    this.celularSeleccionado = celular
  }
}
