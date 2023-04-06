import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineaddComponent } from './medicineadd.component';

describe('MedicineaddComponent', () => {
  let component: MedicineaddComponent;
  let fixture: ComponentFixture<MedicineaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicineaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicineaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
