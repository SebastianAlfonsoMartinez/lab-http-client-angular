import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Answer } from './models/answer.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  private readonly apiUrl = "https://pokeapi.co/api/v2/berry-firmness/5";

  constructor(private http: HttpClient) { }

  obtenerRespuesta() {
    return this.http.get<Answer>(this.apiUrl);
  }

}
