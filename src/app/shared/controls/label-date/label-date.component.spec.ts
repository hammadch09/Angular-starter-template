import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelDateComponent } from './label-date.component';

describe('LabelDateComponent', () => {
  let component: LabelDateComponent;
  let fixture: ComponentFixture<LabelDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
