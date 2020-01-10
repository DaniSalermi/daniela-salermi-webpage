import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowIDoItComponent } from './how-i-do-it.component';

describe('HowIDoItComponent', () => {
  let component: HowIDoItComponent;
  let fixture: ComponentFixture<HowIDoItComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowIDoItComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowIDoItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
