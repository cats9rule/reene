import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { ChatMessage } from '../../interfaces/chat-message.interface';

@Component({
  selector: 'app-chat-bottom-sheet',
  templateUrl: './chat-bottom-sheet.component.html',
  styleUrl: './chat-bottom-sheet.component.scss'
})
export class ChatBottomSheetComponent {
  constructor(private _bottomSheetRef: MatBottomSheetRef<ChatBottomSheetComponent>) { }

  messages: ChatMessage[] = [
    { id: "1", recipient: "user", sender: "chat", text: "Hello World" }
  ];

  closeChat() {
    this._bottomSheetRef.dismiss();
  }
}
