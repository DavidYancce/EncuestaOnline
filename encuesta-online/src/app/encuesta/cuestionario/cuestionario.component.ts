import { Component, OnInit } from '@angular/core';
import { MatListOption } from '@angular/material/list';
import { CuestionarioServiceService } from 'src/app/services/cuestionario-service.service';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.scss']
})
export class CuestionarioComponent implements OnInit {

  constructor(private _cuestionarioService: CuestionarioServiceService) {

  }

  ngOnInit(): void {
    this._cuestionarioService.getcomoDicen().subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        this.palabras.push(data[i].descripcion)
      }
    });
  }
  palabras: string[] = ['opcion 1', 'opcode 2'];
  palabrasSeleccionadas: any[] = [];

  onGroupsChange(options: MatListOption[]) {
    for(var option of  options) {
      console.log(option.value)
      this.palabrasSeleccionadas.push(option.value)
      console.log(this.palabrasSeleccionadas)
    }
  }
}
