import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Funcionario } from '../../models/funcionario';
import { FuncionarioService } from '../../services/funcionario';

@Component({
  selector: 'app-funcionarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './funcionarios.html',
  styleUrl: './funcionarios.scss'
})
export class Funcionarios implements OnInit {

  funcionarios: Funcionario[] = [];

  constructor(private funcionarioService: FuncionarioService) {}

  ngOnInit(): void {
    this.funcionarioService.listar().subscribe({
      next: (dados) => {
        this.funcionarios = dados;
      },
      error: (erro) => {
        console.error('Erro ao carregar funcionários:', erro);
      }
    });
  }
}