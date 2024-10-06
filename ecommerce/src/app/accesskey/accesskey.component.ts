import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../../services/notification.service'; // Importe o serviço

@Component({
  selector: 'app-accesskey',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './accesskey.component.html',
  styleUrls: ['./accesskey.component.css']
})
export class AccessKeyComponent {
  token: string = '';

  constructor(private notificationService: NotificationService) {} // Injete o serviço

  onSubmit() {
    if (this.token) {
      // Aqui você pode adicionar a lógica para verificar o token
      // Por exemplo, chamando um serviço para validação do token
      this.notificationService.showNotification('Token de acesso validado com sucesso!', 1); // 1 para sucesso
    } else {
      this.notificationService.showNotification('Token inválido! Tente novamente.', 2); // 2 para erro
    }
  }
}
