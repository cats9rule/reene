import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ChatMessageComponent } from './components/chat-message/chat-message.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { ChatBottomSheetComponent } from './components/chat-bottom-sheet/chat-bottom-sheet.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { ChatFabComponent } from './components/chat-fab/chat-fab.component';
import { ChatInputComponent } from './components/chat-input/chat-input.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [ChatMessageComponent, MessageListComponent, ChatBottomSheetComponent, ChatFabComponent, ChatInputComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatBottomSheetModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDividerModule
  ],
  exports: [
    ChatFabComponent
  ]
})
export class ChatbotModule { }
