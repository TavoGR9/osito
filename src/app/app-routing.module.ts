import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { SidevarComponent } from './components/dashboard/admin/sidevar/sidevar.component';
import { RegistrarUsuarioComponent } from './components/dashboard/admin/registrar-usuario/registrar-usuario.component';
import { ListaHotelesComponent } from './components/dashboard/admin/lista-hoteles/lista-hoteles.component';
import { ListaSitiosTuristicosComponent } from './components/dashboard/admin/lista-sitios-turisticos/lista-sitios-turisticos.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sidevar', component: SidevarComponent },
  { path: 'reguser', component: RegistrarUsuarioComponent },
  { path: 'listaHoteles', component: ListaHotelesComponent },
  { path: 'listaTuristicos', component: ListaSitiosTuristicosComponent },



  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
