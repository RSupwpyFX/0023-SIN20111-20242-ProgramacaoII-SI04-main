import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../../services/notification.service'; // Importe o serviço

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Corrigi o `styleUrl` para `styleUrls`
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private notificationService: NotificationService) {} // Injete o serviço

  onSubmit() {
    if (this.email && this.password) {
      this.notificationService.showNotification('Login realizado com sucesso!', 1); // 1 para sucesso
    } else {
      this.notificationService.showNotification('Email ou senha incorretos!', 2); // 2 para erro
    }
  }

}
