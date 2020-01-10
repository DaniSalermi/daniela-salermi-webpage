import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RrssBarComponent } from './rrss-bar.component';

describe('RrssBarComponent', () => {
  let component: RrssBarComponent;
  let fixture: ComponentFixture<RrssBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RrssBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RrssBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
