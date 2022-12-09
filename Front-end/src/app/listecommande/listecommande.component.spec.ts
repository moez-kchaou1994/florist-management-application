import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListecommandeComponent } from './listecommande.component';

describe('ListecommandeComponent', () => {
  let component: ListecommandeComponent;
  let fixture: ComponentFixture<ListecommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListecommandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListecommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
