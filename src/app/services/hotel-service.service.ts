import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelServiceService {


  private apiUrl = 'http://localhost/hotelreservation/ObtenerHotelesPorLugar.php?lugares';
  constructor(private http: HttpClient) {}

  // Método para obtener los hoteles por lugar
  getHoteles(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
