import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifbouquetComponent } from './modifbouquet.component';

describe('ModifbouquetComponent', () => {
  let component: ModifbouquetComponent;
  let fixture: ComponentFixture<ModifbouquetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifbouquetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifbouquetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
