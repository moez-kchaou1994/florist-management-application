import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModiffleureComponent } from './modiffleure.component';

describe('ModiffleureComponent', () => {
  let component: ModiffleureComponent;
  let fixture: ComponentFixture<ModiffleureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModiffleureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModiffleureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
