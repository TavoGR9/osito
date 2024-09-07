import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelServiceService {


  private apiUrl = 'http://localhost/hotelreservation/';
  constructor(private http: HttpClient) {}

  getHoteles(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getAllHoteles(): Observable<any>{
    return this.http.get<any>(this.apiUrl + 'ObtenerHotelesPorLugar.php?hoteles');
  }
}
