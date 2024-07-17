import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SegmentationDialogComponent } from '../dialogs/segmentation-dialog/segmentation-dialog.component';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})
export class StepperComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  fourthFormGroup = this._formBuilder.group({
    fourthCtrl: ['', Validators.required],
  });
  isLinear = false;
  canGenerateRoofData = false;
  analyzeRoofColor = 'accent';
  roofDataColor = '';

  nextBtnColor = 'primary';
  backBtnColor = 'warn';

  @Output()
  displayResults: EventEmitter<boolean> = new EventEmitter();

  constructor(private _formBuilder: FormBuilder, private dialog: MatDialog) { }

  generatePlan() {
    this.displayResults.emit(true);
  }

  openSegmentDialog() {
    const dialogRef = this.dialog.open(SegmentationDialogComponent, {
      maxWidth: '100vw',
    });
    dialogRef.afterClosed().subscribe((res) => {
      console.log(res);
      this.canGenerateRoofData = true;
      this.analyzeRoofColor = '';
      this.roofDataColor = 'accent';
    });
  }
}
