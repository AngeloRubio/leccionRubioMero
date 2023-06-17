import { Component } from '@angular/core';
import { EstudianteService } from '../../services/estudiante.service';
import { Estudiante } from '../../models/Estudiante';

@Component({
  selector: 'app-vista2',
  templateUrl: './vista2.component.html',
  styleUrls: ['./vista2.component.css']
})
export class Vista2Component {
  Listestudiantes: Estudiante [] = [];
  estudiante: Estudiante = new Estudiante();
  ListEliminado: Estudiante [] = [];

  constructor(private ServeEstudiante: EstudianteService) { 
    this.Listestudiantes = this.ServeEstudiante.getDatos();
    this.ListEliminado = this.ServeEstudiante.getEliminados();
  }

  agregarEstudiante(estudiante: Estudiante) {
    this.ServeEstudiante.agregarEstudiante(estudiante);
    //this.Listestudiantes.push(estudiante);
    this.Listestudiantes = this.ServeEstudiante.getDatos();
    this.estudiante = new Estudiante();
  }

  quitarEstudiante(estudiante: Estudiante) {
    this.ServeEstudiante.quitarEstudiante(estudiante);
    //this.ListEliminado.push(estudiante);
    this.ListEliminado = this.ServeEstudiante.getEliminados();
    this.Listestudiantes = this.ServeEstudiante.getDatos();
  }
  
}
