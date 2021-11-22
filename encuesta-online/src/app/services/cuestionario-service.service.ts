import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CuestionarioServiceService {

  constructor(private http: HttpClient) { }

  getcomoSoy(): Observable<any> {
    const URL= 'https://localhost:44364/api/ComoSoy'
    return this.http.get(URL, {
      responseType: 'json'
    });
  }

  getDicenMi(): Observable<any> {
    const URL= 'https://localhost:44364/api/DicenMi'
    return this.http.get(URL, {
      responseType: 'json'
    });
  }
  
  guardarRespuestaComoSoy(idPalabra: number):Observable<any>{
    const URL= 'https://localhost:44364/api/ComoSoy'

    return this.http.post<any>(URL, 
    {
      "iD_Usuario": 3,
      "iD_Valor": idPalabra,
      "iD_Proceso": 100 
    } )
  }
}
