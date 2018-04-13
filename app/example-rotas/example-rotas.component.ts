import { AuthService } from './login/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-rotas',
  templateUrl: './example-rotas.component.html'
})
export class ExampleRotasComponent implements OnInit {

  mostarMenu: Boolean = false;
  constructor(private service: AuthService) { }

  ngOnInit() {
    this.service.mostarMenu.subscribe(
      result =>this.mostarMenu = result
    );
  }

}
