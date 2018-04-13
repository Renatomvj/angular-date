import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExemplosPipesComponent } from './exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ExemplosPipesComponent, CamelCasePipe],
  exports:[ExemplosPipesComponent]
})
export class ExemplosPipesModule { }
