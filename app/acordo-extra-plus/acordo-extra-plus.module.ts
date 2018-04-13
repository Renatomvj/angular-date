import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcordoExtraPlusComponent } from './acordo-extra-plus.component';
import { PesquisaModule } from './pesquisa/pesquisa.module';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    PesquisaModule
    
  ],
  declarations: [AcordoExtraPlusComponent],
  exports:[
    AcordoExtraPlusComponent
  ]

})
export class AcordoExtraPlusModule { }
