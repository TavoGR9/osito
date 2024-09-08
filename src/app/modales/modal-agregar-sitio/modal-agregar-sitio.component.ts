import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HotelServiceService } from 'src/app/services/hotel-service.service';
@Component({
  selector: 'app-modal-agregar-sitio',
  templateUrl: './modal-agregar-sitio.component.html',
  styleUrls: ['./modal-agregar-sitio.component.css']
})
export class ModalAgregarSitioComponent implements OnInit {

  
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
    public dialogRef: MatDialogRef<ModalAgregarSitioComponent>,
    private hotelService: HotelServiceService,
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
      return;
    }
  
    const formData = new FormData();
    formData.append('nuevoHotel', JSON.stringify({
      nombre: this.nuevoHotel.nombre_hotel,
      descripcion: this.nuevoHotel.descripcion_hotel,
      direccion: this.nuevoHotel.direccion,
      estrellas: parseInt(this.nuevoHotel.estrellas),
      id_lugar: this.nuevoHotel.id_lugar
    }));
    formData.append('imagen', this.nuevoHotel.imagen, this.nuevoHotel.imagen.name);

  
    console.log('Datos del hotel:', {
      nombre: this.nuevoHotel.nombre_hotel,
      descripcion: this.nuevoHotel.descripcion_hotel,
      direccion: this.nuevoHotel.direccion,
      estrellas: parseInt(this.nuevoHotel.estrellas),
      id_lugar: this.nuevoHotel.id_lugar,
    });
    console.log('Imagen seleccionada:', this.nuevoHotel.imagen);
  
    this.hotelService.crearHotel(formData).subscribe(
      (response: any) => {
        console.log('Hotel creado con éxito', response);
        this.dialogRef.close(true);
      },
      (error: any) => {
        console.error('Error al crear el hotel', error);
        alert('Error al crear el hotel: ' + error);
      }
    );
  }

}
