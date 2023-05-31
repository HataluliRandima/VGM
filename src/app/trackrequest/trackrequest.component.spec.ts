import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackrequestComponent } from './trackrequest.component';

describe('TrackrequestComponent', () => {
  let component: TrackrequestComponent;
  let fixture: ComponentFixture<TrackrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackrequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
