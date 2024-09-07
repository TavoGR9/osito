import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-agregar-hotel',
  templateUrl: './modal-agregar-hotel.component.html',
  styleUrls: ['./modal-agregar-hotel.component.css']
})
export class ModalAgregarHotelComponent implements OnInit {

  nuevoHotel: {
    nombre_hotel: string;
    estrellas: string;
    direccion: string;
    descripcion_hotel: string;
    id_lugar: number | null;
    imagen: File | null;
  } = {
    nombre_hotel: '',
    estrellas: '',
    direccion: '',
    descripcion_hotel: '',
    id_lugar: null,
    imagen: null
  };

  lugares: any[] = [];
  imagenSeleccionada: string | ArrayBuffer | null = null;

  constructor(
    public dialogRef: MatDialogRef<ModalAgregarHotelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { lugares: any[] }
  ) {
    this.lugares = data.lugares;
  }

  ngOnInit(): void {
    // Inicialización si es necesaria
  }

  onFileSelected(event: Event) {
    const element = event.target as HTMLInputElement;
    const fileList: FileList | null = element.files;
    if (fileList && fileList.length > 0) {
      const file = fileList[0];
      this.nuevoHotel.imagen = file;
      
      // Mostrar una vista previa de la imagen
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        this.imagenSeleccionada = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  guardarHotel() {
    if (!this.nuevoHotel.imagen) {
      console.error('No se ha seleccionado ninguna imagen');
      // Aquí puedes mostrar un mensaje de error al usuario
      return;
    }

    const formData = new FormData();
    formData.append('nombre_hotel', this.nuevoHotel.nombre_hotel);
    formData.append('estrellas', this.nuevoHotel.estrellas.toString());
    formData.append('direccion', this.nuevoHotel.direccion);
    formData.append('descripcion_hotel', this.nuevoHotel.descripcion_hotel);
    if (this.nuevoHotel.id_lugar) {
      formData.append('id_lugar', this.nuevoHotel.id_lugar.toString());
    }
    formData.append('imagen', this.nuevoHotel.imagen, this.nuevoHotel.imagen.name);

    console.log('Datos del formulario:', {
      nombre_hotel: this.nuevoHotel.nombre_hotel,
      estrellas: this.nuevoHotel.estrellas,
      direccion: this.nuevoHotel.direccion,
      descripcion_hotel: this.nuevoHotel.descripcion_hotel,
      id_lugar: this.nuevoHotel.id_lugar,
      imagen: this.nuevoHotel.imagen ? this.nuevoHotel.imagen.name : 'No se seleccionó imagen'
    });

    // Aquí llamarías a tu servicio para enviar los datos
    // this.hotelService.crearHotel(formData).subscribe(
    //   (response) => {
    //     console.log('Hotel creado con éxito', response);
    //     this.dialogRef.close(true);
    //   },
    //   (error) => {
    //     console.error('Error al crear el hotel', error);
    //     // Mostrar mensaje de error al usuario
    //   }
    // );
  }
}