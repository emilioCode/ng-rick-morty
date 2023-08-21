import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSpanComponent } from './ui-span.component';

describe('UiSpanComponent', () => {
  let component: UiSpanComponent;
  let fixture: ComponentFixture<UiSpanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiSpanComponent]
    });
    fixture = TestBed.createComponent(UiSpanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
