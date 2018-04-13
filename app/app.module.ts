import { ExemplosPipesModule } from './exemplos-pipes/exemplos-pipes.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AcordoExtraPlusModule } from './acordo-extra-plus/acordo-extra-plus.module';
import { ExampleRotasModule } from './example-rotas/example-rotas.module';
import { CursosService } from './example-rotas/cursos/cursos.service';
import { NgbDateNativeAdapter } from './NgbDateNativeAdapter';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AcordoExtraPlusModule,
    ExemplosPipesModule,
    ExampleRotasModule,
    FormsModule
  ],
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}],
  bootstrap: [AppComponent]
})
export class AppModule { }
