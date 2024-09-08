import { Component, OnInit, ViewChild } from '@angular/core';
import { HotelServiceService } from 'src/app/services/hotel-service.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalAgregarHotelComponent } from 'src/app/modales/modal-agregar-hotel/modal-agregar-hotel.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-lista-hoteles',
  templateUrl: './lista-hoteles.component.html',
  styleUrls: ['./lista-hoteles.component.css']
})
export class ListaHotelesComponent implements OnInit {
  hoteles: any[] = [];
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['nombre', 'sitio'];
  
  @ViewChild(MatSort, {static: true}) sort!: MatSort;

  constructor(private hotelService: HotelServiceService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(this.hoteles);
  }

  ngOnInit(): void {
    this.obtenerHoteles();
    this.dataSource.sort = this.sort;
  }

  obtenerHoteles(): void {
    this.hotelService.getAllHoteles().subscribe(
      (data) => {
        console.log("All hoteles", data);
        this.hoteles = data;
        this.dataSource.data = this.hoteles;
      },
      (error) => {
        console.error('Error al obtener los hoteles:', error);
      }
    );
  }

  filtrarHoteles(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    
    this.dataSource.filterPredicate = (data: any, filter: string) => {
      const nombreHotel = data.nombre_hotel.toLowerCase();
      const nombreLugar = data.nombre_lugar.toLowerCase();
      return nombreHotel.includes(filter) || nombreLugar.includes(filter);
    };
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
      width: '700px', 
      height: '500px',
      data: { lugares: lugaresParaModal }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Datos del nuevo hotel:', result);
        // Aquí puedes agregar la lógica para guardar el nuevo hotel
        // y actualizar la lista de hoteles
        this.obtenerHoteles();
      }
    });
  }
}