import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-hoteles',
  templateUrl: './lista-hoteles.component.html',
  styleUrls: ['./lista-hoteles.component.css']
})
export class ListaHotelesComponent implements OnInit {

  dataSource = [
    { nombre: 'Hotel Las Palmas', sitio: 'Playa del Carmen' },
    { nombre: 'Hotel Paraíso', sitio: 'Cancún' }
  ];

  // Definir las columnas que se van a mostrar en la tabla
  displayedColumns: string[] = ['nombre', 'sitio'];

  constructor() {}

  ngOnInit(): void {}
}
