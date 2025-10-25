import { Component } from '@angular/core';
import { Distancia } from './distancia';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-distancia',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './distancia.component.html',
  styleUrl: './distancia.component.css'
})
export class DistanciaComponent {
  formulario!: FormGroup;
  resultado!: number;
  classdistancia = new Distancia();
  

  ngOnInit(): void {
    this.formulario = new FormGroup({
      numero1: new FormControl(null),
      numero2: new FormControl(null),
      numero3: new FormControl(null),
      numero4: new FormControl(null),
    });
  }
  multiNumero(): void {
    this.classdistancia.x1 = this.formulario.value.numero1;
    this.classdistancia.y1 = this.formulario.value.numero2;
    this.classdistancia.x2 = this.formulario.value.numero3;
    this.classdistancia.y2 = this.formulario.value.numero4;
    this.classdistancia.calcular();
    this.resultado = this.classdistancia.distancia;
  }
}
