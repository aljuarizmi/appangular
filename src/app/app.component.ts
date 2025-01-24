import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { EmpleadosComponent } from "./empleados/empleados.component";

@Component({
  selector: 'app-raiz',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'appbund';
  saludos='Hola a todo el mundo';
}
