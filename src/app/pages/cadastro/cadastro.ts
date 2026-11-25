
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cadastro, RespostaAPI } from '../../models/cadastro';
import { CadastroService } from '../../services/cadastro';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.scss'
})
export class CadastroComponent {

  idConsulta: number | null = null;
  cadastro: Cadastro | null = null;
  resultado: RespostaAPI | null = null;

  constructor(private cadastroService: CadastroService) {}

  consultar(): void {
    if (!this.idConsulta || this.idConsulta <= 0) {
      return;
    }

    this.cadastro = null;
    this.resultado = null;

    this.cadastroService.consultar(this.idConsulta).subscribe({
      next: (dados) => {
        this.cadastro = dados;
      },
      error: () => {
        this.resultado = {
          status: 'Erro',
          mensagem: 'Não foi possível consultar o cadastro.'
        };
      }
    });
  }

  excluir(): void {
    if (!this.cadastro) return;

    this.cadastroService.excluir(this.cadastro.id).subscribe({
      next: (resposta) => {
        this.resultado = resposta;

        if (resposta.status === 'Ok') {
          this.cadastro = null;
        }
      },
      error: () => {
        this.resultado = {
          status: 'Erro',
          mensagem: 'Erro ao excluir cadastro.'
        };
      }
    });
  }

  alterar(): void {
    if (!this.cadastro) return;

    this.cadastroService.alterar(this.cadastro.id, this.cadastro).subscribe({
      next: (resposta) => {
        this.resultado = resposta;
      },
      error: () => {
        this.resultado = {
          status: 'Erro',
          mensagem: 'Erro ao alterar cadastro.'
        };
      }
    });
  }
}
