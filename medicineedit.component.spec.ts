import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineeditComponent } from './medicineedit.component';

describe('MedicineeditComponent', () => {
  let component: MedicineeditComponent;
  let fixture: ComponentFixture<MedicineeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicineeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicineeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
