import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../../services/notification.service';
import { NavbarService } from './../../services/navbar.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // Propriedades para armazenar os dados do formulário
  email: string = '';
  password: string = '';

  constructor(
    private notificationService: NotificationService,   // Injeção do serviço de notificações
    private router: Router, // Injeção do Router para navegação
    private navbarService: NavbarService // Injeção do servico de navbar
  ) {}

  // Método chamado quando o formulário é enviado
  onSubmit() {
    if (this.email && this.password) {
      this.navbarService.setVisible(true); // Torna a navbar visível
      // Aqui você pode adicionar a lógica para salvar o funcionário, se necessário
      // Por exemplo, chamar um serviço para enviar os dados para um backend
      this.router.navigate(['/home']);
    } else {
      this.notificationService.showNotification('Email ou senha incorretos!', 2);
    }
  }
}
