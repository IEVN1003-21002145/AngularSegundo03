import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { DistanciaComponent } from "./formularios/distancia/distancia.component";
import { ZodiacoComponent } from './formularios/zodiaco/zodiaco.component';
import { AxbComponent } from './formularios/axb/axb.component';


import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DistanciaComponent, ZodiacoComponent, AxbComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit {
  title = 'AngularSegundo03';

  ngOnInit(): void {
    initFlowbite();
  }
}