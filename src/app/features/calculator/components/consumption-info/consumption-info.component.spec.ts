import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumptionInfoComponent } from './consumption-info.component';

describe('ConsumptionInfoComponent', () => {
  let component: ConsumptionInfoComponent;
  let fixture: ComponentFixture<ConsumptionInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsumptionInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsumptionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
