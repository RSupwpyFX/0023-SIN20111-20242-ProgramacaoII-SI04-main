import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  template: `<div *ngIf="message" [ngClass]="{'notification-sucess': color === 1, 'notification-danger': color === 2}">{{ message }}</div>`,
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  message: string = '';
  color: number = 0;

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.notificationService.getNotification().subscribe(({ message, color }) => {
      this.message = message;
      this.color = color;
    });
  }
}
