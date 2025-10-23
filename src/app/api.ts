import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Api {
  
  private apiURL: string = "/api/leitura";

  constructor(private http:HttpClient) {}

  getSensores():Observable<any[]> {
    return this.http.get<any[]>(this.apiURL);
  }
}
