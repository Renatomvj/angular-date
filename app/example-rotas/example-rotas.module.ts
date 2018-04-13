import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExampleRotasComponent } from './example-rotas.component';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { RotasRoutingModule } from './rotas-routing.module';
import { AuthService } from './login/auth.service';

import { AuthGuardService } from './guards/auth-guard.service';
//import { NgbDateNativeAdapter } from './NgbDateNativeAdapter';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RotasRoutingModule,
    FormsModule
  ],
  declarations: [ExampleRotasComponent, HomeComponent, CursosComponent, LoginComponent, CursoDetalheComponent],
  exports: [ExampleRotasComponent],
  providers:[AuthService, AuthGuardService]
})
export class ExampleRotasModule { }
