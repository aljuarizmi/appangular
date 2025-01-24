import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { EmpleadoComponent } from "../empleado/empleado.component";

@Component({
    selector:"app-empleados",
    templateUrl:"./empleados.component.html",
    styleUrl:"./empleados.component.css",
    imports: [EmpleadoComponent],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class EmpleadosComponent{

}


