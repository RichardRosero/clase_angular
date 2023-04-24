import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDataEmpleado, IEmpleado } from 'src/app/interfaces/empleadosInterface';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-pagina-tabla',
  templateUrl: './pagina-tabla.component.html',
  styleUrls: ['./pagina-tabla.component.css']
})
export class PaginaTablaComponent implements OnInit {
  listEmpleado: IDataEmpleado[]= []; //creamos esto para luego mandarla a la tablita creada en html 
  constructor (private rutas: Router,
              private empleadoService: EmpleadoService){//importamos empleadoservices es la clase que creamos anteriormente
    
  }
  ngOnInit(): void{
    console.log('hola estoy desde ngOninit');//llamamos ya ahora si a la funcion que importamos arriba
                                             //usamos suscribe para sucribir la funcion   
    this.empleadoService.getAllEmployee().subscribe(
    (res)=> { //con res decimos que dentro de elloo tendremos la respuesta del servicio
    console.log(res);
    this.listEmpleado = res.data;
    },(error)=>{
      console.log(error);
    }
    ); 
                                      
  }
    
  regresar(){
    this.rutas.navigate(['inicio']) //funcion de regresar a inicio
  }

}
