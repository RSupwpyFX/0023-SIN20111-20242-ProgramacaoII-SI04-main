import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

@Injectable({
  providedIn: 'root',
})
export class RelatorioService {

  constructor() { }

  // Método para gerar o PDF com jsPDF para movimentações financeiras
  gerarRelatorioFinanceiro(dados: any[]) {
    const doc = new jsPDF();

    // Título do relatório
    doc.text('Relatório Financeiro', 14, 16);

    // Opções para a tabela
    doc.autoTable({
      head: [['Data', 'Descrição', 'Valor', 'Tipo']],
      body: dados.map(item => [item.data, item.descricao, item.valor, item.tipo]),
      startY: 20,
      theme: 'grid',
      styles: { fontSize: 10 },
    });

    // Salvando o PDF
    doc.save('relatorio-financeiro.pdf');
  }

  // Método para gerar o PDF com jsPDF para cadastro de usuário
  gerarRelatorioUsuario(dados: any[]) {
    const doc = new jsPDF();

    // Título do relatório
    doc.text('Relatório de Cadastro de Usuários', 14, 16);

    // Opções para a tabela
    doc.autoTable({
      head: [['Nome', 'Tipo Cliente', 'CPF/CNPJ', 'Endereço', 'Telefone', 'Email']],
      body: dados.map(user => [
        user.nome,
        user.tipoCliente === 'fisica' ? 'Pessoa Física' : 'Pessoa Jurídica',
        user.cpf,
        `${user.rua}, ${user.numero}, ${user.bairro}, ${user.cidade} - ${user.estado}`,
        user.telefone,
        user.email
      ]),
      startY: 20,
      theme: 'grid',
      styles: { fontSize: 10 },
    });

    // Salvando o PDF
    doc.save('relatorio-usuarios.pdf');
  }
}
