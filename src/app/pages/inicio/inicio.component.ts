import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  

  nombre = "Richard";
  apellido = "Rosero";
  loadinginvisible= false; //agregamos esta variable y la empezamos con false 
  constructor(private ruta: Router){

  }

  visualizarloading(){  //ahora creamos una funcion llamando a loadinginvesible y la colocamos en true 
    this.loadinginvisible= true;
      setTimeout(() =>{ //con esta fraccion de codigo decimos que se mantenga en tru por 4 segundos
        this.loadinginvisible= false;

      },4000)

  }

  irPaginaTabla(){

    this.ruta.navigate(['pagina-tabla']);

  }
}
