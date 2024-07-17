import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';

import { MatCardModule } from '@angular/material/card';
import { SegmentationDialogComponent } from './components/dialogs/segmentation-dialog/segmentation-dialog.component';
import { CustomMapModule } from './custom-map/custom-map.module';
import { RoofInfoComponent } from './components/roof-info/roof-info.component';
import { PanelInfoComponent } from './components/panel-info/panel-info.component';
import { ConsumptionInfoComponent } from './components/consumption-info/consumption-info.component';



@NgModule({
  declarations: [
    CalculatorComponent,
    StepperComponent,
    SegmentationDialogComponent,
    RoofInfoComponent,
    PanelInfoComponent,
    ConsumptionInfoComponent
  ],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCardModule,
    MatDialogModule,
    MatSliderModule,
    CustomMapModule,
    CommonModule
  ]
})
export class CalculatorModule { }
