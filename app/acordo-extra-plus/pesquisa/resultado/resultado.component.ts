import { Component, OnInit } from '@angular/core';
import { PesquisaService } from '../pesquisa.service';


@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  constructor(private service: PesquisaService) { }

  acordos: string[] = [];

  ngOnInit() {
    this.acordos = this.service.getAcordos();
    this.service.emitirCursoCriado.subscribe(
      acordo => console.log(acordo)
    )
  }

}
