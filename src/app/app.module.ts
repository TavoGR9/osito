import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarUsuarioComponent } from './components/dashboard/admin/registrar-usuario/registrar-usuario.component';
import { SidevarComponent } from './components/dashboard/admin/sidevar/sidevar.component';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  // Asegúrate de importar esto
import { MatIconModule } from '@angular/material/icon';  // Importa el módulo MatIconModule
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { RouterModule } from '@angular/router'; // Asegúrate de importar esto
import { ListaSitiosTuristicosComponent } from './components/dashboard/admin/lista-sitios-turisticos/lista-sitios-turisticos.component';
import { ListaHotelesComponent } from './components/dashboard/admin/lista-hoteles/lista-hoteles.component';
import { ModalAgregarHotelComponent } from './modales/modal-agregar-hotel/modal-agregar-hotel.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { InformacionClienteComponent } from './components/dashboard/cliente/informacion-cliente/informacion-cliente.component';




@NgModule({
  declarations: [
    AppComponent,
    RegistrarUsuarioComponent,
    SidevarComponent,
    ListaSitiosTuristicosComponent,
    ListaHotelesComponent,
    ModalAgregarHotelComponent,
    InformacionClienteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    MatSidenavModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTableModule,
    MatListModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
