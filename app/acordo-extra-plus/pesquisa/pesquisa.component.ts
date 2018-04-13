import { Component, OnInit } from '@angular/core';
import { PesquisaService } from './pesquisa.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {

  acordos: string[] = [];

  constructor(private service: PesquisaService) 
  {
    
  }
    
  ngOnInit() {
    this.acordos = this.service.getAcordos();
  }

  

}
