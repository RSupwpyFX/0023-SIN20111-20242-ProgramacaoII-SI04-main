import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

// Define a interface Notification para tipar as notificações
interface Notification {
  message: string; // Mensagem da notificação
  color: number;   // Cor da notificação (pode representar um código de cor)
}

@Injectable({
  providedIn: 'root' // O serviço é fornecido na raiz do aplicativo
})
export class NotificationService {
  private subject = new Subject<Notification>(); // Cria um Subject para emitir notificações

  // Retorna um Observable para permitir que outros componentes se inscrevam nas notificações
  getNotification() {
    return this.subject.asObservable();
  }

  // Método para mostrar uma notificação
  showNotification(message: string, color: number) {
    // Emite a nova notificação
    this.subject.next({ message, color });

    // Remove a notificação após 3 segundos
    setTimeout(() => {
      this.subject.next({ message: '', color: 0 });
    }, 3000);
  }
}
