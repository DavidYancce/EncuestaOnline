import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppCommonsModule} from '../../commons/commons.module';
import { CuestionarioComponent } from './cuestionario.component';

@NgModule({
    declarations: [
        CuestionarioComponent
    ],
    imports: [
      CommonModule,
      AppCommonsModule
    ]
  })
  export class CuestionarioModule { }