import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarefa } from '../models/tarefa.model';

const baseUrl = 'http://127.0.0.1:8000';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  constructor(private http: HttpClient) { }

  getAllTasksByIdUser(id: any): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(`${baseUrl}/usuario/${id}/tarefas`);
  }

  get(id: any): Observable<Tarefa> {
    return this.http.get(`${baseUrl}/tarefas/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/tarefas/`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/tarefas/${id}`);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/tarefas/${id}/`, data);
  }
}
