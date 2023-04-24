import { ApplicationRef, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient} from '@angular/common/http'//importamos http
import { IEmpleado } from '../interfaces/empleadosInterface';

const API_GET_ALL_EMPLOYEE= environment.API_GET_ALL_EMPLOYEE //de esta forma accedemos a la ruta que esta en nuestro servicio

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService { //desde aqui vamos acceeder a los servicios

  constructor(private http: HttpClient) { } //hacemos uso de http 

      getAllEmployee(){
        return this.http.get<IEmpleado>(API_GET_ALL_EMPLOYEE)// llamamos a la variablr que tenia la ruta con un
      }


}
