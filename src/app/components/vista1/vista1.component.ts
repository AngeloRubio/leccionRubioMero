import { Component } from '@angular/core'
import { UsuarioServicioService } from '../../services/usuario-servicio.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-vista1',
  templateUrl: './vista1.component.html',
  styleUrls: ['./vista1.component.css']
})
export class Vista1Component {
  username: string;
  password: string;

  constructor(private Login: UsuarioServicioService, private router: Router) { 
    this.username = '';
    this.password = '';
  }

  onSubmit() {
    const isLoggedIn = this.Login.login(this.username, this.password);

    if (isLoggedIn) {
      console.log('Inicio de sesión exitoso');
      this.router.navigate(['/vista2']);
    } else {

      console.log('Credenciales inválidas');
    }
  }
}
