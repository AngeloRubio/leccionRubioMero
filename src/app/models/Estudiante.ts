// models/Estudiante.ts
export class Estudiante {
    cedula: string;
    nombre: string;
    apellido: string;
    asignatura: string;
    nota1: number;
    nota2: number;
    promedio: number;
    estado: string;
    fecha: Date;
  
    constructor() {
      this.cedula = '';
      this.nombre = '';
      this.apellido = '';
      this.asignatura = '';
      this.nota1 = 0;
      this.nota2 = 0;
      this.promedio = 0;
      this.estado = '';
      this.fecha = new Date();
    }
  
  }
  