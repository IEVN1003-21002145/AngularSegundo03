import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Zodiaco } from './zodiaco';

@Component({
  selector: 'app-zodiaco',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './zodiaco.component.html',
  styleUrls: ['./zodiaco.component.css'],
  providers: [Zodiaco]
})

export class ZodiacoComponent implements OnInit {

  formulario!: FormGroup;
  classzodiaco: Zodiaco = new Zodiaco();

  // Variables para mostrar resultados
  resnombre: string = '';
  resEdad: string = '';
  resSimbolo: string = '';
  imgz: string = '';

  constructor(private zodiaco: Zodiaco) {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      apaterno: new FormControl(''),
      amaterno: new FormControl(''),
      dia: new FormControl(''),
      mes: new FormControl(''),
      anio: new FormControl(''),
      sexo: new FormControl('')
    });
  }

  imprimir(): void {
    // Nombre completo
    this.classzodiaco.nombre = this.formulario.value.nombre;
    this.classzodiaco.apaterno = this.formulario.value.apaterno;
    this.classzodiaco.amaterno = this.formulario.value.amaterno;
    this.classzodiaco.calcularNombreCompleto();
    this.resnombre = this.classzodiaco.resnombre;
    // Edad
    this.classzodiaco.dia = this.formulario.value.dia;
    this.classzodiaco.mes = this.formulario.value.mes;
    this.classzodiaco.anio = this.formulario.value.anio;
    this.classzodiaco.calcularEdad();
    this.resEdad = this.classzodiaco.resEdad;

    // Signo zodiacal chino
    this.classzodiaco.anio = this.formulario.value.anio;
    this.classzodiaco.calcularZodiacoChino();
    this.resSimbolo = this.classzodiaco.signo;
    this.imgz = this.classzodiaco.imgz;
  }
}