import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empleado',
  imports: [FormsModule],
  templateUrl: './empleado.component.html',
  //styleUrl: './empleado.component.css'
  styles:["p{background-color:red}"]
})
export class EmpleadoComponent {
private nombre="Jackie Giovanni";
private apellido="Mora Nonato";
distrito="San Juan de Miraflores";
habilitacionCuadro=true;
usuRegistrado=false;
textoDeRegistro="No hay nadie registrado";
getRegistroUsuario(){
  this.usuRegistrado=false;
}
cambiaDistrito(event:Event){
  this.distrito=(<HTMLInputElement>event.target).value
}
setUsuarioRegistrado(event:Event){
  //alert("El usuario se acaba de registrar");
  //this.textoDeRegistro="EL usuario se acaba de registrar";
  if((<HTMLInputElement>event.target).value=="si"){
    this.textoDeRegistro="El usuario se acaba de registrar";
  }else{
    this.textoDeRegistro="No hay nadie registrado";
  }
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
