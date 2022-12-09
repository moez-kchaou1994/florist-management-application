import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleureComponent } from './fleure.component';

describe('FleureComponent', () => {
  let component: FleureComponent;
  let fixture: ComponentFixture<FleureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FleureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FleureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
