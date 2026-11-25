
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cadastro, RespostaAPI } from '../models/cadastro';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private url = 'https://bu.furb.br/mcardoso/progWeb/apiRestAval.php/cadastro';

  constructor(private http: HttpClient) {}

  consultar(id: number): Observable<Cadastro> {
    return this.http.get<Cadastro>(`${this.url}/${id}`);
  }

  excluir(id: number): Observable<RespostaAPI> {
    return this.http.delete<RespostaAPI>(`${this.url}/${id}`);
  }

  alterar(id: number, cadastro: Cadastro): Observable<RespostaAPI> {
    return this.http.put<RespostaAPI>(`${this.url}/${id}`, cadastro);
  }
}
