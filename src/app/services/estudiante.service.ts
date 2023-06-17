import { Injectable } from '@angular/core';
import { Estudiante } from '../models/Estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  Listestudiantes: Estudiante[] = [];
  ListEliminado: Estudiante[] = [];
  getDatos() {
    return this.Listestudiantes.slice();
  }
  getEliminados() {
    return this.ListEliminado.slice();
  }

  agregarEstudiante(estudiante: Estudiante) {
    console.log('bienvenido al servicio');
    this.Listestudiantes.push(estudiante);
  }

  quitarEstudiante(estudiante: Estudiante) {
    console.log(this.Listestudiantes);
    console.log(estudiante);
    const index = this.Listestudiantes.findIndex(e => e.cedula === estudiante.cedula);
    console.log(index);
    
    if (index !== -1) {
      const estudianteEliminado = this.Listestudiantes.splice(index, 1)[0];
      this.ListEliminado.push(estudianteEliminado);
    }
    console.log(this.ListEliminado);
  }
  
}
