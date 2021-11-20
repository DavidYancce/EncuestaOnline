import { Component, OnInit } from '@angular/core';
import { CuestionarioServiceService } from 'src/app/services/cuestionario-service.service';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.scss']
})
export class CuestionarioComponent implements OnInit {

  constructor(private _cuestionarioService : CuestionarioServiceService) {
    
   }

  ngOnInit(): void {
    this._cuestionarioService.getcomoDicen().subscribe(data=>{
      for (let i = 0; i < data.length;i++) {
        this.palabras.push(data[i].descripcion)
      }
    });
  }
  palabras: string[] = [];
  
}
