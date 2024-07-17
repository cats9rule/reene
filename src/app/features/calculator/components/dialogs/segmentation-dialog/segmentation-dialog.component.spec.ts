import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentationDialogComponent } from './segmentation-dialog.component';

describe('SegmentationDialogComponent', () => {
  let component: SegmentationDialogComponent;
  let fixture: ComponentFixture<SegmentationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SegmentationDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SegmentationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
