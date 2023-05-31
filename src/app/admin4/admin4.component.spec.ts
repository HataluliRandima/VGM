import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Admin4Component } from './admin4.component';

describe('Admin4Component', () => {
  let component: Admin4Component;
  let fixture: ComponentFixture<Admin4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Admin4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Admin4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
