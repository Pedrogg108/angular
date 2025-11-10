import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Celular } from '../../../../models/celular';
@Component({
  selector: 'app-tablets',
  imports: [CommonModule],
  templateUrl: './tablets.html',
  styleUrl: './tablets.css'
})
export class Tablets {
  public infoTablet: Celular[]
  constructor() {
    this.infoTablet = [
      {
        id: 1,
        nombre: "HUAWEI MatePad 11.5 ",
        marca: "HUAWEI",
        descripcion: "256GB/8GB Ram",
        precio: 564000,
        img: "../../../assets/huaweiMatePad.jpg",
        alt: "HUAWEI MatePad 11.5 S"
      },
      {
        id: 2,
        nombre: "Galaxy Tab S10 FE",
        marca: "Samsung",
        descripcion: "256GB/8GB Ram",
        precio: 765000,
        img: "../../../assets/tabs10fe.jpg",
        alt: "Galaxy Tab S10 FE"
      },
      {
        id: 3,
        nombre: "Lenovo Tab M11",
        marca: "Lenovo",
        descripcion: "128GB/4GB Ram",
        precio: 345000,
        img: "../../../assets/tabm11.jpg",
        alt: "Lenovo Tab M11"
      },
      {
        id: 4,
        nombre: "Galaxy Tab A9",
        marca: "Samsung",
        descripcion: "64GB/4GB Ram",
        precio: 456000,
        img: "../../../assets/taba9.jpg",
        alt: "Galaxy Tab A9"
      },
      {
        id: 5,
        nombre: "Redmi Pad SE",
        marca: "Xiaomi",
        descripcion: "256GB/8GB Ram",
        precio: 876000,
        img: "../../../assets/redmipadse.jpg",
        alt: "Redmi Pad SE"
      },
      {
        id: 6,
        nombre: "Galaxy Tab S6 Lite",
        marca: "Samgung",
        descripcion: "64GB/4GB Ram",
        precio: 12000,
        img: "../../../assets/tabs6.png",
        alt: "Galaxy Tab S6 Lite"
      }

    ]
  }
  tabletSeleccionado: any = null
  verMas(tablet: any) {
    this.tabletSeleccionado = tablet

  }
}

