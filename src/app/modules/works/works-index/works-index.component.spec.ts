import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksIndexComponent } from './works-index.component';

describe('WorksIndexComponent', () => {
  let component: WorksIndexComponent;
  let fixture: ComponentFixture<WorksIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
