import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerqueenComponent } from './burgerqueen.component';

describe('BurgerqueenComponent', () => {
  let component: BurgerqueenComponent;
  let fixture: ComponentFixture<BurgerqueenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurgerqueenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurgerqueenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
