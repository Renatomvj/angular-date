
import { Component } from '@angular/core';
import { Acordo } from './Models/Acordo';
import { Revenda } from './Models/Revenda';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  acordo: Acordo;
  title = 'app';

  revendas:  Revenda[];
  constructor()
  {
    this.acordo = new Acordo();
  
    this.getRevendas();

  }

  getRevendas()
  {
    this.revendas = new Array<Revenda>();

    var r1 = new Revenda();
    r1.idGrupo= "1";
    r1.nomeGrupo = "Grupo X";
    r1.idRevenda = "1";
    r1.nomeRevenda = "Revenda X";
   
    var r2 = new Revenda();
    r2.idGrupo= "1";
    r2.nomeGrupo = "Grupo X";
    r2.idRevenda = "2";
    r2.nomeRevenda = "Revenda Y";

    var r3 = new Revenda();
    r3.idGrupo= "2";
    r3.nomeGrupo = "Grupo Z";
    r3.idRevenda = "3";
    r3.nomeRevenda = "Revenda ABC"; 

    this.revendas.push(r1);
    this.revendas.push(r2);
    this.revendas.push(r3);    
  }
}
