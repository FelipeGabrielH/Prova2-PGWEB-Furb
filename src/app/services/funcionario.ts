import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionario } from '../models/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private url = '/data/exemploJSON.json';

  constructor(private http: HttpClient) {}

  listar(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.url);
  }
}