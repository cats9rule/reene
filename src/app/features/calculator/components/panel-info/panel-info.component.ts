import { Component } from '@angular/core';

@Component({
  selector: 'app-panel-info',
  templateUrl: './panel-info.component.html',
  styleUrl: './panel-info.component.scss'
})
export class PanelInfoComponent {

  panelType = [
    'Монокристални',
    'Поликристални'
  ];

  selected = this.panelType[0];
  isManualMode = false;
  buttonText = this.setButtonText();

  toggleManualMode() {
    this.isManualMode = !this.isManualMode;
    this.buttonText = this.setButtonText();
  }

  setButtonText() {
    return this.isManualMode ? "Изабери стандардну вредност" : "Подеси ручно";
  }
}

