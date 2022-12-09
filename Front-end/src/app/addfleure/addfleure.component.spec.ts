import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfleureComponent } from './addfleure.component';

describe('AddfleureComponent', () => {
  let component: AddfleureComponent;
  let fixture: ComponentFixture<AddfleureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddfleureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfleureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
