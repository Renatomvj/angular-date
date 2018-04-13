import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PesquisaComponent } from './pesquisa.component';
import { FiltroComponent } from './filtro/filtro.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { PesquisaService } from './pesquisa.service';

@NgModule({
  imports: [
    NgbModule,
    CommonModule
  ],
  declarations: [PesquisaComponent, FiltroComponent, ResultadoComponent],
  exports: [PesquisaComponent],
  providers:[PesquisaService]
})
export class PesquisaModule { }
