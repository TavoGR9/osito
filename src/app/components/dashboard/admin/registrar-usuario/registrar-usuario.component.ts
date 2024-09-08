import { Component, ViewChild } from '@angular/core';
import { SidevarComponent } from '../sidevar/sidevar.component';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';
import { NgForm } from '@angular/forms'; // Importar NgForm

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent {

  formData: any = {};

  @ViewChild('f') formulario: NgForm | undefined; 

  constructor(private usuarioService: UsuarioServiceService) {}

  onSubmit(form: any) { // Manejar el envío del formulario
    // Crear un FormData y agregar los datos del formulario
    const formData = new FormData();
    formData.append('nombre', form.nombre);
    formData.append('apellidoP', form.apellidoPaterno);
    formData.append('apellidoM', form.apellidoMaterno);
    formData.append('estado', form.estado);
    formData.append('ciudad', form.ciudad);
    formData.append('colonia', form.colonia);
    formData.append('codigoPostal', form.codigoPostal);
    formData.append('email', form.correo); // Asegúrate de que el ID del campo de correo coincida
    formData.append('password', form.password);
    formData.append('tipo_usuario', '1'); // Tipo de usuario siempre 1

    this.usuarioService.registrarAdmin(formData).subscribe(
      (response) => {
        // Manejar la respuesta exitosa (puedes mostrar un mensaje al usuario, redirigir, etc.)
        console.log('Usuario registrado exitosamente:', response);
        if (this.formulario) { // Verificar si formulario está definido
          this.formulario.resetForm(); // Resetear el formulario
        }
      },
      (error) => {
        // Manejar el error (puedes mostrar un mensaje de error al usuario)
        console.error('Error al registrar usuario:', error);
      }
    );
  }
}
