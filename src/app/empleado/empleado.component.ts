import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  imports: [],
  templateUrl: './empleado.component.html',
  //styleUrl: './empleado.component.css'
  styles:["p{background-color:red}"]
})
export class EmpleadoComponent {
private nombre="Jackie Giovanni";
private apellido="Mora Nonato";
private distrito="San Juan de Lurigancho";
habilitacionCuadro=true;
usuRegistrado=false;
getRegistroUsuario(){
  this.usuRegistrado=true;
}
getNombre(){
  return this.nombre
}
getApellido(){
  return this.apellido
}
getDistrito(){
  return this.distrito
}
llamaDistrito(value:String){

}

}
