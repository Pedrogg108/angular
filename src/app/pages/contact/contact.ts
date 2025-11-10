import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {
  // Definimos el formulario reactivo
  formQueja = new FormGroup({
    nombre: new FormControl('', Validators.required),
    correo: new FormControl('', [Validators.required, Validators.email]),
    motivo: new FormControl('', Validators.required),
    mensaje: new FormControl('', Validators.required)
  });

  // Método que se ejecuta al enviar el formulario
  enviarQueja(): void {
    if (this.formQueja.valid) {
      console.log("Queja enviada con éxito:");
      // datos individuales
      console.log("Nombre:", this.formQueja.value.nombre);
      console.log("Correo:", this.formQueja.value.correo);
      console.log("Motivo:", this.formQueja.value.motivo);
      console.log("Mensaje:", this.formQueja.value.mensaje);

      // Limpia el formulario
      this.formQueja.reset();
    } 
  }
}
