import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlllisteComponent } from './allliste.component';

describe('AlllisteComponent', () => {
  let component: AlllisteComponent;
  let fixture: ComponentFixture<AlllisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlllisteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlllisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
