import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkCardLargeComponent } from './work-card-large.component';

describe('WorkCardLargeComponent', () => {
  let component: WorkCardLargeComponent;
  let fixture: ComponentFixture<WorkCardLargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkCardLargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkCardLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
