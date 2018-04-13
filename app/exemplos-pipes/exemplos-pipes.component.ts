import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro : any = {
    titulo: 'Livro baaao ',
    rating: 4.5,
    numeroPaginas: 314,
    preco: 44.99
  };

  constructor() { }

  ngOnInit() {
  }

}
