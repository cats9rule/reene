import { Component, Input } from '@angular/core';
import { ChatMessage } from '../../interfaces/chat-message.interface';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrl: './chat-message.component.scss'
})
export class ChatMessageComponent {
  @Input()
  message: ChatMessage = { recipient: "", sender: "", text: "", id: "" };

}
