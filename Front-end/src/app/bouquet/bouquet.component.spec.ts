import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouquetComponent } from './bouquet.component';

describe('BouquetComponent', () => {
  let component: BouquetComponent;
  let fixture: ComponentFixture<BouquetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BouquetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BouquetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
