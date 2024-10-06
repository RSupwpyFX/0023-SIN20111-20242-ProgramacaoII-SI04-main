import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../../services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email: string = '';
  password: string = '';

  constructor(private notificationService: NotificationService, private router: Router,) {}

  onSubmit() {
    if (this.email) {
      this.notificationService.showNotification('Chave de acesso gerada com sucesso!', 1);
      this.router.navigate(['/accesskey']);
    } else {
      this.notificationService.showNotification('Email ou senha incorretos!', 2);
    }
  }
}
