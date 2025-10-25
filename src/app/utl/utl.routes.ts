import { Routes } from "@angular/router";

export default[

  {
    path: 'agreagar',
    loadComponent:() => import('./agregar/agregar.component').then(c=>c.AgregarComponent)
  },
] as Routes
