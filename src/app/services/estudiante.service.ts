import { Injectable } from '@angular/core';
import { Estudiante } from '../models/Estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  estudiantes: Estudiante[] = [];
  getDatos() {
    return this.estudiantes.slice();
  }

  agregarEstudiante(estudiante: Estudiante) {
    console.log('bienvenido al servicio');
    this.estudiantes.push(estudiante);
  }
}
