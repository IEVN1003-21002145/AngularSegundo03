import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { axb } from './axb';

@Component({
  selector: 'app-axb',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './axb.component.html',
  styleUrl: './axb.component.css'
})
export class AxbComponent {
  formulario!: FormGroup;
  resultado!: number;
  classaxb = new axb();

  ngOnInit():void {
    this.formulario = new FormGroup({
      NumeroFormA: new FormControl(''),
      NumeroFormB: new FormControl(''),
    });

  }
  imprimir():void {
      this.classaxb.a = this.formulario.value.NumeroFormA;
      this.classaxb.b = this.formulario.value.NumeroFormB;
      this.classaxb.operacion();
      this.resultado = this.classaxb.resultado
  }
}
