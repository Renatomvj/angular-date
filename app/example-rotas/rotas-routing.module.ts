import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { AuthGuardService } from './guards/auth-guard.service';


// const appRoutes:  Routes = [
//     {  path: '', component: HomeComponent, canActivate:[AuthGuardService] },
//     {  path: 'cursos', component: CursosComponent, canActivate:[AuthGuardService], canLoad:[AuthGuardService] },
//     {  path: 'curso/:id', component: CursoDetalheComponent, canActivate:[AuthGuardService] },
//     {  path: 'login', component: LoginComponent }
// ]; 

const appRoutes:  Routes = [
    {  path: '', component: HomeComponent},
    {  path: 'cursos', component: CursosComponent },
    {  path: 'curso/:id', component: CursoDetalheComponent},
    {  path: 'login', component: LoginComponent }
]; 


@NgModule(
    {
      imports:[RouterModule.forRoot(appRoutes)],
      exports:[RouterModule]
    }
)
export class RotasRoutingModule{}