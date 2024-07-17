import { Component, Input } from '@angular/core';
import { ChatMessage } from '../../interfaces/chat-message.interface';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.scss'
})
export class MessageListComponent {
  @Input()
  messages: ChatMessage[] = [];
}
