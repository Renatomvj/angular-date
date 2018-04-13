import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  constructor() { }

  getCursos()
  {
    return [
      {id: 1, nome: 'Angular 5'},
      {id: 2, nome: 'C#'}
    ];
  }

  getCurso(id: number)
  {
    let cursos  = this.getCursos();
    for (let index = 0; index < cursos.length; index++) {
      let curso = cursos[index];
      if(curso.id == id)
      {
        return curso;
      }           
    }

    return null;
  }
}
