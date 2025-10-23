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
      this.infoCelular=[
        {
          id:12,
          nombre:"sd",
          marca:"dad",
          descripcion:"celu1",
          img:"",
          alt:"celu1"

        }
      ]
    }
    celular: any = null
    verMas(celularInfo:any){
    this.celular = celularInfo
  }
}
