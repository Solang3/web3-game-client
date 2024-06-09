import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private apiUrl = 'http://localhost:5000'; // Asegúrate de que la URL coincida con la de tu backend

  constructor(private http: HttpClient) {}

  buyItem(playerId: string, itemId: number, price: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/buy-item`, { playerId, itemId, price });
  }

  stake(playerId: string, amount: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/stake`, { playerId, amount });
  }

  triggerRandomEvent(playerId: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/random-event`, { playerId });
  }

  sellFlowers(playerId: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/sell-flowers`, { playerId });
  }
}
