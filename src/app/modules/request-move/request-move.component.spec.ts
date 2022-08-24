import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestMoveComponent } from './request-move.component';

describe('RequestMoveComponent', () => {
  let component: RequestMoveComponent;
  let fixture: ComponentFixture<RequestMoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestMoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
