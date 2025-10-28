import { Component } from '@angular/core';
import { Celular } from '../../../../models/celular'; 
import { FormControl,FormGroup, ReactiveFormsModule,Validators } from '@angular/forms';
/*
  formcontrol=controlador de cada dato ingresado en el formulario
  formgroup= derectiva para formularios reactivos en angular, agrupa formcontrol
  reactiveformModule= permite hacer uso de formularios reactivos
  validators= valida datos ingresadp 
 */


@Component({
  selector: 'app-new-products',
  imports: [],
  templateUrl: './new-products.html',
  styleUrl: './new-products.css'
})
export class NewProducts {

}
