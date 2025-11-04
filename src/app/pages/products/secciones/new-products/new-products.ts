import { Component } from '@angular/core';
import { Celular } from '../../../../models/celular';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
/*
  formcontrol=controlador de cada dato ingresado en el formulario
  formgroup= derectiva para formularios reactivos en angular, agrupa formcontrol
  reactiveformModule= permite hacer uso de formularios reactivos
  validators= valida datos ingresadp 
 */


@Component({
  selector: 'app-new-products',
  imports: [ReactiveFormsModule],
  templateUrl: './new-products.html',
  styleUrl: './new-products.css'
})
export class NewProducts {
  // Propiedades privadas= informacion sencible
  private contadorId = 1
  //coleccion de productos de tipo Celular
  coleccionProductos: Celular[] = []
  //instancia que se vincula con el formulario desde el html

  //nombrePropiedad:new control()
  nuevoProducto = new FormGroup({
    nombre: new FormControl(``, Validators.required),
    marca: new FormControl(``, Validators.required),
    descripcion: new FormControl(``, Validators.required),
    precio: new FormControl(null, Validators.required),
    img: new FormControl(``,),
    alt: new FormControl(``,)
  })
  /**
   * @descripcion metodo de creacion de productos segun intefaz "producto"
   */
  crearProducto(): void {
    if (this.nuevoProducto.value) {
      const nuevoProducto: Celular = {
        id: this.contadorId++,
        nombre: this.nuevoProducto.value.nombre!,
        marca: this.nuevoProducto.value.marca!,
        descripcion: this.nuevoProducto.value.descripcion!,
        precio: this.nuevoProducto.value.precio!,
      }
      this.coleccionProductos.push(nuevoProducto)
      console.log("producto agregado: ", nuevoProducto)
      console.log("coleccion actual: ", this.coleccionProductos)
      this.nuevoProducto.reset()
    }
  }
}
