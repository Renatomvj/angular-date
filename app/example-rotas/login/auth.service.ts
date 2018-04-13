import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from './usuario';

@Injectable()
export class AuthService {

  private usuarioAtenticado: boolean = false;
  mostarMenu = new EventEmitter<boolean>();
  constructor(private router: Router) { }

  fazerlogin(usuario: Usuario){
    if(usuario.nome === "usuario@email.com" && usuario.senha==="123")
    {
     this.usuarioAtenticado = true;
     
     this.mostarMenu.emit(true);
     this.router.navigate(['/']);

    }
    else
    {
      this.mostarMenu.emit(false);
      this.usuarioAtenticado= false;
    }
  }

  usuarioAutenticado()
  {
    return this.usuarioAtenticado;
  }

}
