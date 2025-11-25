
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class MessagesComponent {
  // Mock data for demonstration
  conversations = [
    { id: 1, name: 'SegPro Brasil', lastMessage: 'Olá! Tenho sim, muito interesse...', unread: 0, avatar: 'https://picsum.photos/seed/company1/200/200' },
    { id: 2, name: 'TechGuard Solutions', lastMessage: 'Sua entrevista está marcada para...', unread: 1, avatar: 'https://picsum.photos/seed/company2/200/200' }
  ];

  selectedConversation = this.conversations[0];

  messages = [
    { id: 1, text: 'Olá Carlos, vimos seu perfil e gostaríamos de conversar sobre a vaga de Supervisor. Você tem interesse?', sender: 'other', time: '10:30' },
    { id: 2, text: 'Olá! Tenho sim, muito interesse. Qual o melhor horário para conversarmos?', sender: 'me', time: '10:32' },
  ];
}
