import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotManagerComponent } from './bot-manager.component';

describe('BotManagerComponent', () => {
  let component: BotManagerComponent;
  let fixture: ComponentFixture<BotManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
