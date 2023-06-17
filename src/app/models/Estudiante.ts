// models/Estudiante.ts
export class Estudiante {
    cedula: string;
    nombre: string;
    apellido: string;
    asignatura: string;
    fechaNacimiento: Date;

  
    constructor() {
      this.cedula = '';
      this.nombre = '';
      this.apellido = '';
      this.asignatura = '';
      this.fechaNacimiento = new Date();
    }
  
  }
  