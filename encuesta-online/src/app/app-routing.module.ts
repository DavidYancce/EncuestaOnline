import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuestionarioComponent } from './encuesta/cuestionario/cuestionario.component';
import {LoginComponent } from './encuesta/login/login.component';
import {InicioComponent} from './encuesta/inicio/inicio.component';

const routes: Routes = [
  {path: 'cuestionario', component: CuestionarioComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
