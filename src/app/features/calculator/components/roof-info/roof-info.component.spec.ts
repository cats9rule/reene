import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoofInfoComponent } from './roof-info.component';

describe('RoofInfoComponent', () => {
  let component: RoofInfoComponent;
  let fixture: ComponentFixture<RoofInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoofInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoofInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
