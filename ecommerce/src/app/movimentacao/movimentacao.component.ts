import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RelatorioService } from '../../services/relatorio.service';

@Component({
  selector: 'app-movimentacao',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './movimentacao.component.html',
  styleUrl: './movimentacao.component.css'
})
export class MovimentacaoComponent {
  dataInicio: string = '';
  dataFim: string = '';
  tipoMovimentacao: string = '';

  // Movimentações mocadas
  movimentacoes = [
    { data: '2024-10-10', descricao: 'Compra de material', valor: 200.50, tipo: 'Saída' },
    { data: '2024-10-12', descricao: 'Venda de produto', valor: 500.00, tipo: 'Entrada' },
  ];

  constructor(private relatorioService: RelatorioService) { }

  // Método para filtrar movimentações (simulação por enquanto)
  onFilter() {
    console.log('Filtros aplicados:', this.dataInicio, this.dataFim, this.tipoMovimentacao);
    // Aqui você poderia adicionar a lógica de filtragem real ou chamar um serviço.
  }

  // Método para gerar o PDF com as movimentações
  gerarPDF() {
    this.relatorioService.gerarRelatorioFinanceiro(this.movimentacoes);
  }
}
