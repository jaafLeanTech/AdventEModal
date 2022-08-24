import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycardTableComponent } from './mycard-table.component';

describe('MycardTableComponent', () => {
  let component: MycardTableComponent;
  let fixture: ComponentFixture<MycardTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycardTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MycardTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
