import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.scss']
})
export class CuestionarioComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit(): void {
    
  }
  palabras: string[] = ['Etica', 'Meticulosa', 'Ansiosa', 'Racional', 'Entretenida','Fuerte'];
  
}
