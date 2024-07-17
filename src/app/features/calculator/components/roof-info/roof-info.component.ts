import { Component } from '@angular/core';

@Component({
  selector: 'app-roof-info',
  templateUrl: './roof-info.component.html',
  styleUrl: './roof-info.component.scss'
})
export class RoofInfoComponent {
  manualMode = false;
  angleButtonText = AngleButtonText.manual;

  angleValues = [
    '30 (цреп)',
    '5 (лим)',
    '0 (раван)'
  ];
  angleValue = this.angleValues[0];

  sliderParams: SliderParams = {
    min: -180,
    max: 180,
    step: 5
  };
  sliderValue = 0;

  sliderLabels = [
    'север',
    'запад',
    'југ',
    'исток',
    'север'
  ];

  toggleManualMode() {
    this.manualMode = !this.manualMode;
    this.angleButtonText = this.manualMode
      ? AngleButtonText.select
      : AngleButtonText.manual;
  }
}

enum AngleButtonText {
  manual = 'Подеси ручно',
  select = 'Изабери стандардну вредност',
}

interface SliderParams {
  min: number;
  max: number;
  step: number;
}

