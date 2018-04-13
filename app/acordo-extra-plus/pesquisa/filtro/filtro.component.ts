import { Component, OnInit } from '@angular/core';
import { PesquisaService } from './../pesquisa.service';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {

  
  
  constructor(private service: PesquisaService) { }

  ngOnInit() {
    
  }

  onAddCurso(nomeCurso: string)
  {
    this.service.addAcordo(nomeCurso);
    
  }

}
