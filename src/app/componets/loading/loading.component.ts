import { Component, Input } from '@angular/core'; //importamos input que forma parte de la libreria propia de angular

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent {
  
  @Input() visible! : boolean; //con esto nuestro componnente loading tiene una variable de entrada 
                              //con visible! le decimos que mas adelante le daremos un valor 

  
}
