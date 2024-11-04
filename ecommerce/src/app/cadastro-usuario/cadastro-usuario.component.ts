import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../../services/notification.service';
import { RelatorioService } from '../../services/relatorio.service';

@Component({
  selector: 'app-cadastro-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent {
  nome: string = '';
  tipoCliente: string = 'fisica';
  cpf: string = '';
  rua: string = '';
  estado: string = '';
  cidade: string = '';
  bairro: string = '';
  cep: string = '';
  numero: string = '';
  telefone: string = '';
  email: string = '';

  // Usuários cadastrados (dados mockados por enquanto)
  usuarios = [
    {
      nome: 'João Silva',
      tipoCliente: 'fisica',
      cpf: '123.456.789-00',
      rua: 'Rua A',
      estado: 'SP',
      cidade: 'São Paulo',
      bairro: 'Centro',
      cep: '01000-000',
      numero: '123',
      telefone: '(11) 1234-5678',
      email: 'joao@email.com'
    }
  ];

  constructor(
    private notificationService: NotificationService,
    private relatorioService: RelatorioService,
    private router: Router
  ) {}

  // Método para cadastrar um novo usuário
  onSubmit() {
    if (this.nome && this.cpf && this.email) {
      this.notificationService.showNotification('Cadastro realizado com sucesso!', 1);
      // Adiciona o usuário mockado para fins de relatório
      this.usuarios.push({
        nome: this.nome,
        tipoCliente: this.tipoCliente,
        cpf: this.cpf,
        rua: this.rua,
        estado: this.estado,
        cidade: this.cidade,
        bairro: this.bairro,
        cep: this.cep,
        numero: this.numero,
        telefone: this.telefone,
        email: this.email
      });
    } else {
      this.notificationService.showNotification('Preencha todos os campos obrigatórios!', 2);
    }
  }

  // Método para gerar o PDF do relatório de usuários
  gerarRelatorioUsuarios() {
    this.relatorioService.gerarRelatorioUsuario(this.usuarios);
  }
}
