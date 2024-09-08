import { Component, OnInit, ViewChild } from '@angular/core';
import { HotelServiceService } from 'src/app/services/hotel-service.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalAgregarHotelComponent } from 'src/app/modales/modal-agregar-hotel/modal-agregar-hotel.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ModalAgregarSitioComponent } from 'src/app/modales/modal-agregar-sitio/modal-agregar-sitio.component';

@Component({
  selector: 'app-lista-sitios-turisticos',
  templateUrl: './lista-sitios-turisticos.component.html',
  styleUrls: ['./lista-sitios-turisticos.component.css']
})
export class ListaSitiosTuristicosComponent implements OnInit {
  displayedColumns: string[] = ['sitio', 'detalles'];
  dataSource: MatTableDataSource<any>;

   // Definir los datos en duro aquí
   sitiosTuristicos: any[] = [
    { nombre: 'Parque Nacional', descripcion: 'Gran parque con zonas de senderismo' },
    { nombre: 'Museo de Historia', descripcion: 'Museo dedicado a la historia local' },
    { nombre: 'Playa Dorada', descripcion: 'Famosa playa con arena dorada y aguas cristalinas' }
  ];

  constructor(private hotelService: HotelServiceService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(this.sitiosTuristicos);

    
  }

  ngOnInit() {
    
  }



  abrirModal(): void {
    const dialogRef = this.dialog.open(ModalAgregarSitioComponent, {
      width: '700px', 
      height: '500px',
      data: { nombre: '', lugar: '' } // Si necesitas pasar datos al modal
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El modal se cerró');
      console.log(result); // Aquí puedes manejar lo que se devuelve del modal
    });
  }


}
