import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface Notification {
  message: string;
  color: number;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private subject = new Subject<Notification>();

  getNotification() {
    return this.subject.asObservable();
  }

  showNotification(message: string, color: number) {
    this.subject.next({ message, color });
    setTimeout(() => {
      this.subject.next({ message: '', color: 0 });
    }, 3000);
  }
}
