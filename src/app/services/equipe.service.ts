import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EquipeService {
  private apiUrl = 'http://localhost:4200/api/equipes';

  constructor(private http: HttpClient) {}

  getAllEquipes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/all`);
  }

  getEquipeById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createEquipe(equipe: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/add`, equipe);
  }

  updateEquipe(id: number, equipe: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/update/${id}`, equipe);
  }

  deleteEquipe(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }
}
