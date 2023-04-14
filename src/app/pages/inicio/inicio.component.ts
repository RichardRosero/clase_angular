import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  nombre = "Richard";
  apellido = "Rosero";
  loadinginvisible= false; //agregamos esta variable y la empezamos con false 

  visualizarloading(){  //ahora creamos una funcion llamando a loadinginvesible y la colocamos en true 
    this.loadinginvisible= true;
      setTimeout(() =>{ //con esta fraccion de codigo decimos que se mantenga en tru por 4 segundos
        this.loadinginvisible= false;

      },4000)

  }
}
