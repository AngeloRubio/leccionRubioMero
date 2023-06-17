import { Injectable } from '@angular/core';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServicioService {
  usuarios: Usuario[] = [
    { username: 'usuario1', password: 'contraseña1' },
    { username: 'usuario2', password: 'contraseña2' },
    { username: 'usuario3', password: 'contraseña3' }
  ];

  constructor() { }

  login(username: string, password: string): boolean {
    const usuarioEncontrado = this.usuarios.find(user => {
      return user.username === username && user.password === password;
    });

    if (usuarioEncontrado) {
      // El usuario ha sido autenticado exitosamente
      console.log('Inicio de sesión exitoso');
      return true;
    } else {
      // Las credenciales son inválidas
      console.log('Credenciales inválidas');
      return false;
    }
  }
}
