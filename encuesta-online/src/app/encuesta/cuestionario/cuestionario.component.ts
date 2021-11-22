import { Component, OnInit } from '@angular/core';
import { MatListOption } from '@angular/material/list';
import { CuestionarioServiceService } from 'src/app/services/cuestionario-service.service';
import { ComoSoyService } from 'src/app/api/services';
@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.scss']
})
export class CuestionarioComponent implements OnInit {

  constructor(private cuestionarioService: CuestionarioServiceService) {//private comoSoyService: ComoSoyService 

  }

  ngOnInit() {

    this.cuestionarioService.getcomoSoy().subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        this.palabrasComoSoy.push(data[i])
      }
    });
    // this.comoSoyService.apiComoSoyGet().subscribe(data=>{
    //       console.log(data)
    // })


    this.cuestionarioService.getDicenMi().subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        this.palabrasDicenMi.push(data[i])
      }
    });
  }

  palabrasComoSoy: any[] = [];
  palabrasDicenMi: any[] = [];
  palabrasSeleccionadasComoSoy: any[] = [];
  palabrasSeleccionadasDicenMi: any[] = [];

  guardarComoSoy() {
    console.log("guardando");
    for(var palabra of this.palabrasSeleccionadasComoSoy) {
      this.cuestionarioService.guardarRespuestaComoSoy(palabra).subscribe(data=>{
        console.log(data)
      })
    }
    
  }

}
