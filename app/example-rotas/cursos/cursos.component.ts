import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { CursosService } from './cursos.service';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html'
})
export class CursosComponent implements OnInit {
  
 
  cursos:any[];
  pagina: number;
  inscricao: Subscription;
  constructor(private service : CursosService, private route: ActivatedRoute, private router: Router) { 

  }

  ngOnInit() {
       this.cursos = this.service.getCursos(); 
       this.inscricao = this.route.queryParams.subscribe(
          (queryParams: any) =>{ 
           this.pagina = queryParams['pagina'];
          })
  }
  proximaPagina()
  {    
    this.router.navigate(["/cursos"],{queryParams: {'pagina': ++this.pagina}});
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
    
  }
}


