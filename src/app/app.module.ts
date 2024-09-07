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


@NgModule({
  declarations: [
    AppComponent,
    RegistrarUsuarioComponent,
    SidevarComponent,
    ListaSitiosTuristicosComponent,
    ListaHotelesComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
