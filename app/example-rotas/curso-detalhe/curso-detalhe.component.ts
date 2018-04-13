import { CursosService } from './../cursos/cursos.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html'
})
export class CursoDetalheComponent implements OnInit {

  curso: any;
  id: number;
  inscricao: Subscription;

  constructor(private service: CursosService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.inscricao = this.route.params.subscribe((params: any) =>
    {
      this.id = params['id'];

      this.curso = this.service.getCurso(this.id);
    }
  );
  }

}
