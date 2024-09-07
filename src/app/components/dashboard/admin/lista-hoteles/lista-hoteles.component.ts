import { Component, OnInit } from '@angular/core';
import { HotelServiceService } from 'src/app/services/hotel-service.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalAgregarHotelComponent } from 'src/app/modales/modal-agregar-hotel/modal-agregar-hotel.component';

@Component({
  selector: 'app-lista-hoteles',
  templateUrl: './lista-hoteles.component.html',
  styleUrls: ['./lista-hoteles.component.css']
})
export class ListaHotelesComponent implements OnInit {

  hoteles: any[] = [];

  dataSource = [
    { nombre: 'Hotel Las Palmas', sitio: 'Playa del Carmen' },
    { nombre: 'Hotel Paraíso', sitio: 'Cancún' }
  ];

  // Definir las columnas que se van a mostrar en la tabla
  displayedColumns: string[] = ['nombre', 'sitio'];

  constructor(private hotelService: HotelServiceService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.obtenerHoteles();
  }


  obtenerHoteles(): void {
    this.hotelService.getAllHoteles().subscribe(
      (data) => {
        console.log("All hoteles", data); 
        this.hoteles = data;
        this.dataSource = this.hoteles;
      },
      (error) => {
        console.error('Error al obtener los hoteles:', error);
      }
    );
  }

  abrirModalAgregarHotel() {

    const lugaresParaModal = this.hoteles
    .map(hotel => ({ 
      id_lugar: hotel.id_lugar, 
      nombre_lugar: hotel.nombre_lugar 
    }))
    .filter((lugar, index, self) => 
      index === self.findIndex(l => l.id_lugar === lugar.id_lugar)
    );

    const dialogRef = this.dialog.open(ModalAgregarHotelComponent, {
      // Puedes configurar opciones del modal aquí, como el tamaño
      width: '700px', 
      height: '500px',
      data: { lugares: lugaresParaModal }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Aquí puedes manejar los datos del formulario enviados desde el modal
        console.log('Datos del nuevo hotel:', result);
        // ... (Lógica para guardar el hotel en tu base de datos)
      }
    });
  }
}
