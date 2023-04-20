import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PaginaTablaComponent } from './pages/pagina-tabla/pagina-tabla.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: 'pagina-tabla', component: PaginaTablaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
