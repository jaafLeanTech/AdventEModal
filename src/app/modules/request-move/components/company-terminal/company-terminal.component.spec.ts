import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyTerminalComponent } from './company-terminal.component';

describe('CompanyTerminalComponent', () => {
  let component: CompanyTerminalComponent;
  let fixture: ComponentFixture<CompanyTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyTerminalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
