import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatFabComponent } from './chat-fab.component';

describe('ChatFabComponent', () => {
  let component: ChatFabComponent;
  let fixture: ComponentFixture<ChatFabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatFabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
