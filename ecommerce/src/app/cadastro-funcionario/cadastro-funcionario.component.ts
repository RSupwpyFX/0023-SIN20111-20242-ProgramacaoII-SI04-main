import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-cadastro-funcionario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})
export class CadastroFuncionarioComponent {
  // Propriedades para armazenar os dados do formulário
  nome: string = '';
  cpf: string = '';
  cargo: string = '';
  departamento: string = '';
  telefone: string = '';
  email: string = '';
  salario: number = 0;
  nivelPermissao: string = '';

  constructor(
    private notificationService: NotificationService, // Injeção do serviço de notificações
    private router: Router // Injeção do Router para navegação
  ) {}

  // Método chamado quando o formulário é enviado
  onSubmit() {
    // Verifica se todos os campos obrigatórios estão preenchidos
    if (this.nome && this.cpf && this.email) {
      this.notificationService.showNotification('Cadastro realizado com sucesso!', 1);
      // Aqui você pode adicionar a lógica para salvar o funcionário, se necessário
      // Por exemplo, chamar um serviço para enviar os dados para um backend
    } else {
      this.notificationService.showNotification('Preencha todos os campos obrigatórios!', 2);
    }
  }
}
