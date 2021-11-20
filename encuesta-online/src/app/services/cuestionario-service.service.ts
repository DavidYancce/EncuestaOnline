import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CuestionarioServiceService {

  constructor(private http: HttpClient) { }

  getcomoDicen(): Observable<any> {
    const URL= 'https://localhost:44364/api/ComoSoy'
    return this.http.get(URL, {
      responseType: 'json'
    });
  }
}
