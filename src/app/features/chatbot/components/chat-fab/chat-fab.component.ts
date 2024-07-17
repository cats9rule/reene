import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ChatBottomSheetComponent } from '../chat-bottom-sheet/chat-bottom-sheet.component';
import { CdkFixedSizeVirtualScroll } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-chat-fab',
  templateUrl: './chat-fab.component.html',
  styleUrl: './chat-fab.component.scss'
})
export class ChatFabComponent {

  constructor(private _bottomSheet: MatBottomSheet) { }

  visible = true;

  openChat() {
    const ref = this._bottomSheet.open(ChatBottomSheetComponent, {
      hasBackdrop: false,
      disableClose: true
    });
    this.visible = false;
    ref.afterDismissed().subscribe(() => this.visible = true);
  }
}
