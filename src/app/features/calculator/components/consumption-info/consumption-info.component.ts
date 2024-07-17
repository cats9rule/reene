import { Component } from '@angular/core';

@Component({
  selector: 'app-consumption-info',
  templateUrl: './consumption-info.component.html',
  styleUrl: './consumption-info.component.scss'
})
export class ConsumptionInfoComponent {
  monthlyMode = false;
  modeButtonText = ModeButtonText.monthly;

  months = [
    'Јануар',
    'Фебруар',
    'Март',
    'Април',
    'Мај',
    'Јун',
    'Јул',
    'Август',
    'Септембар',
    'Октобар',
    'Новембар',
    'Децембар',
  ];

  toggleMonthlyMode() {
    this.monthlyMode = !this.monthlyMode;
    this.modeButtonText = this.monthlyMode ? ModeButtonText.year : ModeButtonText.monthly;
  }
}

enum ModeButtonText {
  year = 'Унос годишње потрошње',
  monthly = 'Унос месечне потрошње',
}
