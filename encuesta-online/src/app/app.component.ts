import { Component } from '@angular/core';
import { UsuarioService } from './api/services';
import { Usuario } from './api/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'encuesta-online';
  public usuario: Usuario;
  public constructor(private api:UsuarioService){
    this.api.apiUsuarioRegistrarPost({usuario})
  }
}
