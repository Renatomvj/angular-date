import { ExemplosPipesModule } from './exemplos-pipes/exemplos-pipes.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbDateAdapter, NgbDatepickerI18n, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AcordoExtraPlusModule } from './acordo-extra-plus/acordo-extra-plus.module';
import { ExampleRotasModule } from './example-rotas/example-rotas.module';
import { CursosService } from './example-rotas/cursos/cursos.service';
import { NgbDateNativeAdapter } from './NgbDateNativeAdapter';
import { FormsModule } from '@angular/forms';
import { I18n, CustomDatepickerI18n } from './CustomDatepickerI18n';
import { NgbDatePTParserFormatter } from './NgbDatePTParserFormatter';




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
  providers: [[{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}],
  [I18n, { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n }],
  [{provide: NgbDateParserFormatter, useClass: NgbDatePTParserFormatter}],],
  bootstrap: [AppComponent]
})
export class AppModule { }
