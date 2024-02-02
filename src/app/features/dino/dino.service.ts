import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dino } from './model/dino';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DinoService {

  private URL = '../assets/dino.json';

  constructor(private httpClient: HttpClient) {

  }

  getDinos():Observable<Dino[]> {
    return this.httpClient.get<Dino[]>(this.URL);
  }

  getDino(id: number):Observable<Dino> {
    return this.httpClient.get<Dino[]>(this.URL ).pipe(
      map(dinos => dinos.filter(dino => dino.id === id)[0])
    );
  }
}
